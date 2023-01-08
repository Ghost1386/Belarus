using Belarus.Common.DTOs;
using Belarus.Common.DTOs.СontestDto;

namespace Belarus.BusinessLogic.Interfaces;

public interface IСontestService
{
    GetСontestDto Get(int id);

    Task<List<GetСontestDto>> GetAll();

    bool Create(CreateСontestDto contestDto);

    bool Delete(SearchDto searchDto);
}