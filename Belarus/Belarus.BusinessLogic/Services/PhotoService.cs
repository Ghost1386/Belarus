using Belarus.BusinessLogic.Interfaces;
using Belarus.Model;
using Belarus.Model.Enums;
using Belarus.Model.Models;
using Microsoft.AspNetCore.Http;

namespace Belarus.BusinessLogic.Services;

public class PhotoService : IPhotoService
{
    private readonly ApplicationContext _applicationContext;

    public PhotoService(ApplicationContext applicationContext)
    {
        _applicationContext = applicationContext;
    }

    public List<Photo> AddPhotos(List<IFormFile> files, TypesEnum type)
    {
        var photos = new List<Photo>();

        foreach (var file in files)
        {
            photos.Add(new Photo
            {
                PhotoInByteString = ConvertFormPhotoToByteString(file),
                Type = type,
            });
        }

        return photos;
    }

    public void Delete(TypesEnum type, int typeId)
    {
        var photos = _applicationContext.Photos.Where(photo => photo.Type == type &&
                                                                photo.TypeId == typeId).ToList();

        _applicationContext.Photos.RemoveRange(photos);
        _applicationContext.SaveChanges();
    }

    private string ConvertFormPhotoToByteString(IFormFile file)
    {
        var photosInByteString = string.Empty;

        if (file.Length > 0)
        {
            using var ms = new MemoryStream();
            file.CopyTo(ms);
            var fileBytes = ms.ToArray();
            photosInByteString = Convert.ToBase64String(fileBytes);
        }

        return photosInByteString;
    }
}