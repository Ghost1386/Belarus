using AutoMapper;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Belarus.Common.DTOs.NewsDto;
using Belarus.Model;
using Belarus.Model.Enums;
using Belarus.Model.Models;
using Microsoft.EntityFrameworkCore;

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

    public async bool GetAll()
    {
        var news = await _applicationContext.News.Select(news => new News
        {
            Id = news.Id,
            Date = news.Date,
            Text = news.Text,
            Title = news.Title,
            VideoUrl = news.VideoUrl,
            Photos = news.Photos.Where(photo => photo.Type == TypesEnum.News).ToList()
        }).ToListAsync();

        var newsDto = new List<GetNewsDto>();

        foreach (var n in news)
        {
            n.Photos = n.Photos.Where(photo => photo.Type == (int)TypesEnum.News).ToList();

              newsDto.Add(new GetNewsDto
              {
                  Title = n.Title,
                  Text = n.Text,
                  Date = n.Date,
                  Photos = new byte[],
                  VideoUrl = n.VideoUrl
              });
        }

        return newsDto;
    }

    public bool Create(CreateNewsDto newsDto)
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