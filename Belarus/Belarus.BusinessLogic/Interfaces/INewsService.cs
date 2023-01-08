using Belarus.Common.DTOs;
using Belarus.Common.DTOs.NewsDto;

namespace Belarus.BusinessLogic.Interfaces;

public interface INewsService
{
    GetNewsDto Get(int id);

    Task<List<GetNewsDto>> GetAll();

    bool Create(CreateNewsDto newsDto);

    bool Delete(SearchDto searchDto);
}