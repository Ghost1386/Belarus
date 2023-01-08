using Belarus.Common.DTOs.AboutUsDto;

namespace Belarus.BusinessLogic.Interfaces;

public interface IAboutUsService
{
    Task<List<GetAboutUsDto>> GetAll();

    bool Create(CreateAboutUsDto aboutUsDto);

    bool Delete(string title);
}