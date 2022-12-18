using Belarus.Common.DTOs;
using Belarus.Common.DTOs.GalleryDto;

namespace Belarus.BusinessLogic.Interfaces;

public interface IGalleryService
{
    GetGalleryDto Get(int id);

    Task<List<GetGalleryDto>> GetAll();

    bool Create(CreateGalleryDto galleryDto);

    bool Delete(SearchDto searchDto);
}