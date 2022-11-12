using AutoMapper;
using Belarus.Common.DTOs;
using Belarus.Model.Models;

namespace Belarus.Mapper;

public class MapperProfile : Profile
{
    public MapperProfile()
    {
        CreateMap<NewsDto, News>();
    }
}