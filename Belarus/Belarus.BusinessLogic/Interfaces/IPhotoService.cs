using Belarus.Model.Enums;
using Belarus.Model.Models;
using Microsoft.AspNetCore.Http;

namespace Belarus.BusinessLogic.Interfaces;

public interface IPhotoService
{
    List<Photo> AddPhotos(List<IFormFile> files, TypesEnum type);

    void Delete(TypesEnum type, int typeId);
}