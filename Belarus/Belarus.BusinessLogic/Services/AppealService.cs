using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using MailKit.Net.Smtp;
using MimeKit;

namespace Belarus.BusinessLogic.Services;

public class AppealService : IAppealService
{
    public async void AppealSend(AppealDto model)
    {
        var emailMessage = new MimeMessage();
 
        emailMessage.From.Add(new MailboxAddress("Электронное обращение", "lemif1008@yandex.by"));
        emailMessage.To.Add(new MailboxAddress("", "lemif1008@yandex.by"));
        emailMessage.Subject = model.Theme;
        emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
        {
            Text = $"{model.Text}/n {model.Mail}"
        };

        using var client = new SmtpClient();
        await client.ConnectAsync("smtp.yandex.ru", 587, false);
        await client.AuthenticateAsync("lemif1008@yandex.by", "gppuvgccemqdjtfd");
        await client.SendAsync(emailMessage);
 
        await client.DisconnectAsync(true);
    }
}