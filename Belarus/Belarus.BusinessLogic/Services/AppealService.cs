using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using MailKit.Net.Smtp;
using MimeKit;

namespace Belarus.BusinessLogic.Services;

public class AppealService : IAppealService
{
    public async void AppealSend(AppealDto appealDto)
    {
        try
        {
           var message = new MimeMessage();
 
            message.From.Add(new MailboxAddress("Электронное обращение", "lemif1008@yandex.by"));
            message.To.Add(new MailboxAddress(appealDto.Name, "lemif1008@yandex.by"));
            message.Subject = appealDto.Theme;

            var bodyBuilder = new BodyBuilder
            {
                TextBody = $"Почта для ответа:{appealDto.Mail}\n" +
                           $"{appealDto.Name}\n" + 
                           $"Текст обращения:\n{appealDto.Text}"
            };

            if (!string.IsNullOrEmpty(appealDto.FileName))
            {
                await bodyBuilder.Attachments.AddAsync(appealDto.FileName, appealDto.FormFile.OpenReadStream());
            }

            message.Body = bodyBuilder.ToMessageBody();

            using var client = new SmtpClient();
            await client.ConnectAsync("smtp.yandex.ru", 587, false);
            await client.AuthenticateAsync("lemif1008@yandex.by", "gppuvgccemqdjtfd");
            await client.SendAsync(message);
 
            await client.DisconnectAsync(true);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
}