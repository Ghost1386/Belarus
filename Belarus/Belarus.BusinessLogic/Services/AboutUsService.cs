using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs.AboutUsDto;
using Belarus.Model;
using Belarus.Model.Enums;
using Belarus.Model.Models;
using Microsoft.EntityFrameworkCore;

namespace Belarus.BusinessLogic.Services;

public class AboutUsService : IAboutUsService
{
    private readonly ApplicationContext _applicationContext;
    private readonly IPhotoService _photoService;

    public AboutUsService(ApplicationContext applicationContext, IPhotoService photoService)
    {
        _applicationContext = applicationContext;
        _photoService = photoService;
    }

    public async Task<List<GetAboutUsDto>> GetAll()
    {
        var aboutUs = await _applicationContext.AboutUs.Select(aboutUs => new AboutUs
        {
            Id = aboutUs.Id,
            Title = aboutUs.Title,
            Link = aboutUs.Link,
            Photos = aboutUs.Photos.Where(photo => photo.Type == TypesEnum.AboutUs).ToList()
        }).ToListAsync();

        var aboutUsDto = aboutUs.Select(aboutUs => new GetAboutUsDto
        {
            Title = aboutUs.Title,
            Link = aboutUs.Link,
            Photos = aboutUs.Photos.Select(photo => photo.PhotoInByteString).ToList()
        }).ToList();

        aboutUsDto.Reverse();

        return aboutUsDto;
    }

    public bool Create(CreateAboutUsDto aboutUsDto)
    {
        var photos = _photoService.AddPhotos(aboutUsDto.Photos, TypesEnum.AboutUs);

        var aboutUs = new AboutUs
        {
            Title = aboutUsDto.Title,
            Link = aboutUsDto.Link,
            Photos = photos
        };

        _applicationContext.AboutUs.Add(aboutUs);
        _applicationContext.SaveChanges();

        return true;
    }

    public bool Delete(string title)
    {
        title = title.ToLower();

        var aboutUs = _applicationContext.AboutUs.FirstOrDefault(news => news.Title.ToLower() == title);

        if (aboutUs != null)
        {
            _applicationContext.AboutUs.Remove(aboutUs);
            _applicationContext.SaveChanges();

            _photoService.Delete(TypesEnum.AboutUs, aboutUs.Id);

            return true;
        }

        return false;
    }
}