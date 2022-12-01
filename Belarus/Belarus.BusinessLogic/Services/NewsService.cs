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
    private readonly ApplicationContext _applicationContext;
    private readonly IPhotoService _photoService;

    public NewsService(ApplicationContext applicationContext, IPhotoService photoService)
    {
        _applicationContext = applicationContext;
        _photoService = photoService;
    }
    
    public GetNewsDto Get(int id)
    {
        var news = _applicationContext.News.FirstOrDefault(news => news.Id == id);

        var newsDto = new GetNewsDto
        {
            Date = news.Date,
            Text = news.Text,
            Title = news.Title,
            VideoUrl = news.VideoUrl,
            Photos = news.Photos.Select(photo => photo.PhotoInByteString).ToList()
        };

        return newsDto;
    }

    public async Task<List<GetNewsDto>> GetAll()
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

        var newsDto = news.Select(news => new GetNewsDto
        {
            Id = news.Id,
            Date = news.Date,
            Text = news.Text,
            Title = news.Title,
            VideoUrl = news.VideoUrl,
            Photos = news.Photos.Select(photo => photo.PhotoInByteString).ToList()
        }).ToList();

        newsDto.Reverse();
        
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

    public bool Delete(SearchDto searchDto)
    {
        var news = _applicationContext.News.FirstOrDefault(news => news.Title == searchDto.Title && 
                                                                   news.Date == searchDto.Date);

        if (news != null)
        {
            _applicationContext.News.Remove(news);
            _applicationContext.SaveChanges();
            
            _photoService.Delete(TypesEnum.News, news.Id);

            return true;
        }
        
        return false;
    }
}