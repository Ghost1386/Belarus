using System.Text;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Model.Enums;
using Belarus.Model.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;

namespace Belarus.BusinessLogic.Services;

public class PhotoService : IPhotoService
{
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

    public List<byte[]> GetPhotos(List<Photo> photos)
    {
        var photoList = new List<byte[]>();
        
        foreach (var photo in photos)
        {
            photoList.Append(ConvertFormByteStringToByteArray(photo.PhotoInByteString));
        }
        
        return photoList;
    }
    
    private byte[] ConvertFormByteStringToByteArray(string byteString)
    {
        var byteList = new List<byte>();

        foreach (var symbol in byteString)
        {
            byteList.Append(Convert.ToByte(symbol));
        }

        return byteList.ToArray();
    }
}