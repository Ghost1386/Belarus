using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Belarus.Common.DTOs.PreviewDto;
using Belarus.Model;
using Belarus.Model.Enums;
using Belarus.Model.Models;
using Microsoft.EntityFrameworkCore;

namespace Belarus.BusinessLogic.Services;

public class PreviewService : IPreviewService
{
    private readonly ApplicationContext _applicationContext;
    private readonly IPhotoService _photoService;

    public PreviewService(ApplicationContext applicationContext, IPhotoService photoService)
    {
        _applicationContext = applicationContext;
        _photoService = photoService;
    }

    public GetPreviewDto Get(int id)
    {
        var preview = _applicationContext.Previews.Where(preview => preview.Id == id).Select(preview => new Preview
        {
            Date = preview.Date,
            MainText = preview.MainText,
            Text = preview.Text,
            Title = preview.Title,
            Photos = preview.Photos.Where(photo => photo.Type == TypesEnum.Preview).ToList()
        }).ToList()[0];

        var previewDto = new GetPreviewDto
        {
            Date = preview.Date,
            MainText = preview.MainText,
            Text = preview.Text,
            Title = preview.Title,
            Photos = preview.Photos.Select(photo => photo.PhotoInByteString).ToList()
        };

        return previewDto;
    }

    public async Task<List<GetPreviewDto>> GetAll()
    {
        var previews = await _applicationContext.Previews.Select(preview => new Preview
        {
            Id = preview.Id,
            Date = preview.Date,
            MainText = preview.MainText,
            Text = preview.Text,
            Title = preview.Title,
            Photos = preview.Photos.Where(photo => photo.Type == TypesEnum.Preview).ToList()
        }).ToListAsync();

        var previewDto = previews.Select(preview => new GetPreviewDto
        {
            Id = preview.Id,
            Date = preview.Date,
            MainText = preview.MainText,
            Text = preview.Text,
            Title = preview.Title,
            Photos = preview.Photos.Select(photo => photo.PhotoInByteString).ToList()
        }).ToList();

        previewDto.Reverse();

        return previewDto;
    }

    public bool Create(CreatePreviewDto previewDto)
    {
        var photos = _photoService.AddPhotos(previewDto.Photos, TypesEnum.Preview);

        var preview = new Preview
        {
            Title = previewDto.Title,
            MainText = previewDto.MainText,
            Text = previewDto.Text,
            Date = previewDto.Date,
            Photos = photos,
        };

        _applicationContext.Previews.Add(preview);
        _applicationContext.SaveChanges();

        return true;
    }

    public bool Delete(SearchDto searchDto)
    {
        var preview = _applicationContext.Previews.FirstOrDefault(preview => preview.Title == searchDto.Title &&
                                                                             preview.Date == searchDto.Date);

        if (preview != null)
        {
            _applicationContext.Previews.Remove(preview);
            _applicationContext.SaveChanges();

            _photoService.Delete(TypesEnum.Сontest, preview.Id);

            return true;
        }

        return false;
    }
}