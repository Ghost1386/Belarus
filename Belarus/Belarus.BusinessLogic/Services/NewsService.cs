using AutoMapper;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Belarus.Model;
using Belarus.Model.Enums;
using Belarus.Model.Models;

namespace Belarus.BusinessLogic.Services;

public class NewsService : INewsService
{
    private readonly IMapper _mapper;
    private readonly ApplicationContext _applicationContext;
    private readonly IPhotoService _photoService;

    public NewsService(IMapper mapper, ApplicationContext applicationContext, IPhotoService photoService)
    {
        _mapper = mapper;
        _applicationContext = applicationContext;
        _photoService = photoService;
    }
    
    public bool Get()
    {
        throw new NotImplementedException();
    }

    public bool GetAll()
    {
        throw new NotImplementedException();
    }

    public bool Create(NewsDto newsDto)
    {
        var photos = _photoService.AddPhotos(newsDto.Photos, TypesEnum.News);

        var news = new News
        {
            Title = newsDto.Title,
            Text = newsDto.Text,
            Date = newsDto.Date,
            Photos = photos,
            VideoUrl = newsDto.VideoUrl
        };

        _applicationContext.News.Add(news);
        _applicationContext.SaveChanges();

        return true;
    }

    public bool Delete()
    {
        throw new NotImplementedException();
    }
}