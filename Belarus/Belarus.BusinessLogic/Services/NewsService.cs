using AutoMapper;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Belarus.Model;
using Belarus.Model.Models;

namespace Belarus.BusinessLogic.Services;

public class NewsService : INewsService
{
    private readonly IMapper _mapper;
    private readonly ApplicationContext _applicationContext;
    
    public NewsService(IMapper mapper, ApplicationContext applicationContext)
    {
        _mapper = mapper;
        _applicationContext = applicationContext;
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
        var news = _mapper.Map<NewsDto, News>(newsDto);

        _applicationContext.News.Add(news);
        _applicationContext.SaveChangesAsync();

        return true;
    }

    public bool Delete()
    {
        throw new NotImplementedException();
    }
}