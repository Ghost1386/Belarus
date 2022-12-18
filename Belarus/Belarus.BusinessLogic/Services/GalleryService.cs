using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Belarus.Common.DTOs.GalleryDto;
using Belarus.Model;
using Belarus.Model.Enums;
using Belarus.Model.Models;
using Microsoft.EntityFrameworkCore;

namespace Belarus.BusinessLogic.Services;

public class GalleryService : IGalleryService
{
    private readonly ApplicationContext _applicationContext;
    private readonly IPhotoService _photoService;

    public GalleryService(ApplicationContext applicationContext, IPhotoService photoService)
    {
        _applicationContext = applicationContext;
        _photoService = photoService;
    }

    public GetGalleryDto Get(int id)
    {
        var gallery = _applicationContext.Galleries.Where(gallery => gallery.Id == id).
            Select(gallery => new Gallery
            {
                Date = gallery.Date,
                Title = gallery.Title,
                Photos = gallery.Photos.Where(photo => photo.Type == TypesEnum.Gallery).ToList()
            }).ToList()[0];

        var galleryDto = new GetGalleryDto
        {
            Date = gallery.Date,
            Title = gallery.Title,
            Photos = gallery.Photos.Select(photo => photo.PhotoInByteString).ToList()
        };

        return galleryDto;
    }

    public async Task<List<GetGalleryDto>> GetAll()
    {
        var galleries = await _applicationContext.Galleries.Select(gallery => new Gallery
        {
            Id = gallery.Id,
            Date = gallery.Date,
            Title = gallery.Title,
            Photos = gallery.Photos.Where(photo => photo.Type == TypesEnum.Gallery).ToList()
        }).ToListAsync();

        var galleriesDto = galleries.Select(gallery => new GetGalleryDto
        {
            Id = gallery.Id,
            Date = gallery.Date,
            Title = gallery.Title,
            Photos = gallery.Photos.Select(photo => photo.PhotoInByteString).ToList()
        }).ToList();

        galleriesDto.Reverse();

        return galleriesDto;
    }

    public bool Create(CreateGalleryDto galleryDto)
    {
        var photos = _photoService.AddPhotos(galleryDto.Photos, TypesEnum.Gallery);

        var gallery = new Gallery
        {
            Title = galleryDto.Title,
            Date = galleryDto.Date,
            Photos = photos,
        };

        _applicationContext.Galleries.Add(gallery);
        _applicationContext.SaveChanges();

        return true;
    }

    public bool Delete(SearchDto searchDto)
    {
        var gallery = _applicationContext.Galleries.FirstOrDefault(gallery => gallery.Title == searchDto.Title && 
                                                                              gallery.Date == searchDto.Date);

        if (gallery != null)
        {
            _applicationContext.Galleries.Remove(gallery);
            _applicationContext.SaveChanges();
            
            _photoService.Delete(TypesEnum.Gallery, gallery.Id);

            return true;
        }
        
        return false;
    }
}