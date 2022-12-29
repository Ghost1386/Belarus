using Belarus.BusinessLogic.Interfaces;
using Belarus.BusinessLogic.Services;
using Belarus.Model.Models;
using Microsoft.Extensions.DependencyInjection;

namespace Belarus.Extensions;

public static class Dependencies
{
    public static void AddIService(this IServiceCollection services)
    {
        services.AddTransient<IHashService, HashService>();
        services.AddTransient<IAuthService, AuthService>();
        services.AddTransient<INewsService, NewsService>();
        services.AddTransient<IGalleryService, GalleryService>();
        services.AddTransient<IСontestService, СontestService>();
        services.AddTransient<IPreviewService, PreviewService>();
        services.AddTransient<IPhotoService, PhotoService>();
        services.AddTransient<IDocumentService, DocumentService>();
        services.AddTransient<IAboutUsService, AboutUsService>();
        services.AddTransient<IEmailService, EmailService>();
    }
}