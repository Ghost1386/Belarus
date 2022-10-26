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
 
        emailMessage.From.Add(new MailboxAddress("Электронное обращение", "egor555.novik@gmail.com"));
        emailMessage.To.Add(new MailboxAddress("", "egor555.novik@gmail.com"));
        emailMessage.Subject = model.Theme;
        emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
        {
            Text = $"{model.Text}/n {model.Mail}"
        };

        using var client = new SmtpClient();
        await client.ConnectAsync("egor555.novik@gmail.com", 25, false);
        await client.AuthenticateAsync("egor555.novik@gmail.com", "avetul228");
        await client.SendAsync(emailMessage);
 
        await client.DisconnectAsync(true);
    }
}