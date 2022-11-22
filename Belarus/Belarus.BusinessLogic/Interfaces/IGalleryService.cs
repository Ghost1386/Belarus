using Belarus.Common.DTOs;
using Belarus.Common.DTOs.GalleryDto;

namespace Belarus.BusinessLogic.Interfaces;

public interface IGalleryService
{
    GetGalleryDto Get(SearchDto searchDto);

    Task<List<GetGalleryDto>> GetAll();

    bool Create(CreateGalleryDto galleryDto);

    bool Delete(SearchDto searchDto);
}