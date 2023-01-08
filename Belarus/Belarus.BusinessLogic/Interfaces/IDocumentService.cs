using Belarus.Common.DTOs.DocumentDto;

namespace Belarus.BusinessLogic.Interfaces;

public interface IDocumentService
{
    Task<List<GetDocumentDto>> GetAll();

    bool Create(CreateDocumentDto documentDto);

    bool Delete(string title);
}