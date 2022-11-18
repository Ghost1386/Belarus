using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Belarus.Model.Models;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MimeKit;

namespace Belarus.BusinessLogic.Services;

public class EmailService : IEmailService
{
    private readonly ILogger<EmailService> _logger;

    private const string AppealType = "Электронное обращение";
    private const string IntroductionType = "Вступить в организацию";
    private readonly string? _emailAddress;
    private readonly string? _emailPassword;
    private const string Host = "smtp.yandex.ru";

    public EmailService(IConfiguration configuration, ILogger<EmailService> logger)
    {
        _logger = logger;
        _emailAddress = configuration["Email:Address"];
        _emailPassword = configuration["Email:Password"];
    }

    public async Task<bool> AppealBody(AppealDto appealDto)
    {
        var bodyBuilder = new BodyBuilder
        {
            TextBody = $"Почта для ответа: {appealDto.Mail}\n" +
                       $"{appealDto.Name}\n" + 
                       $"Текст обращения:\n{appealDto.Text}"
        };

        foreach (var file in appealDto.FormFile)
        {
            if (!string.IsNullOrEmpty(file.FileName))
            {
                await bodyBuilder.Attachments.AddAsync(file.FileName, file.OpenReadStream());
            }
        }

        var email = new Email
        {
            Type = AppealType,
            Body = bodyBuilder,
            Subject = appealDto.Subject
        };

        var isSanded = await SendEmail(email);
        
        return isSanded;
    }

    public async Task<bool> IntroductionBody(IntroductionDto introductionDto)
    {
        var bodyBuilder = new BodyBuilder
        {
            TextBody = $"Почта для ответа: {introductionDto.Mail}\n" +
                       $"{introductionDto.Name}\n" + 
                       $"Номер телефона:\n{introductionDto.Phone}"
        };

        var email = new Email
        {
            Type = IntroductionType,
            Body = bodyBuilder,
            Subject = string.Empty
        };
        
        var isSanded = await SendEmail(email);
        
        return isSanded;
    }
    
    private async Task<bool> SendEmail(Email email)
    {
        try
        {
            var message = new MimeMessage();
 
            message.From.Add(new MailboxAddress(email.Type, _emailAddress));
            message.To.Add(new MailboxAddress("", _emailAddress));
            message.Subject = email.Subject;
            
            message.Body = email.Body.ToMessageBody();

            using var client = new SmtpClient();
            await client.ConnectAsync(Host, 587, false);
            await client.AuthenticateAsync(_emailAddress, _emailPassword);
            await client.SendAsync(message);
 
            await client.DisconnectAsync(true);

            return true;
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return false;
        }
    }
}