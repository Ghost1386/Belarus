using Belarus.Common.DTOs;

namespace Belarus.BusinessLogic.Interfaces;

public interface INewsService
{
    bool Get();

    bool GetAll();
    
    bool Create(NewsDto newsDto);

    bool Delete();
}