using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Belarus.Common.DTOs.СontestDto;
using Belarus.Model;
using Belarus.Model.Enums;
using Belarus.Model.Models;
using Microsoft.EntityFrameworkCore;

namespace Belarus.BusinessLogic.Services;

public class СontestService : IСontestService
{
    private readonly ApplicationContext _applicationContext;
    private readonly IPhotoService _photoService;

    public СontestService(ApplicationContext applicationContext, IPhotoService photoService)
    {
        _applicationContext = applicationContext;
        _photoService = photoService;
    }
    
    public GetСontestDto Get(int id)
    {
        var contest = _applicationContext.Сontests.Where(contest => contest.Id == id).Select(contest => new Сontest
        {
            Date = contest.Date,
            MainText = contest.MainText,
            Text = contest.Text,
            Title = contest.Title,
            Photos = contest.Photos.Where(photo => photo.Type == TypesEnum.Сontest).ToList()
        }).ToList()[0];

        var contestDto = new GetСontestDto
        {
            Date = contest.Date,
            MainText = contest.MainText,
            Text = contest.Text,
            Title = contest.Title,
            Photos = contest.Photos.Select(photo => photo.PhotoInByteString).ToList()
        };

        return contestDto;
    }

    public async Task<List<GetСontestDto>> GetAll()
    {
        var contests = await _applicationContext.Сontests.Select(contest => new Сontest
        {
            Id = contest.Id,
            Date = contest.Date,
            MainText = contest.MainText,
            Text = contest.Text,
            Title = contest.Title,
            Photos = contest.Photos.Where(photo => photo.Type == TypesEnum.News).ToList()
        }).ToListAsync();

        var contestDto = contests.Select(contest => new GetСontestDto
        {
            Id = contest.Id,
            Date = contest.Date,
            MainText = contest.MainText,
            Text = contest.Text,
            Title = contest.Title,
            Photos = contest.Photos.Select(photo => photo.PhotoInByteString).ToList()
        }).ToList();

        contestDto.Reverse();

        return contestDto;
    }

    public bool Create(CreateСontestDto contestDto)
    {
        var photos = _photoService.AddPhotos(contestDto.Photos, TypesEnum.News);

        var contest = new Сontest
        {
            Title = contestDto.Title,
            MainText = contestDto.MainText,
            Text = contestDto.Text,
            Date = contestDto.Date,
            Photos = photos,
        };

        _applicationContext.Сontests.Add(contest);
        _applicationContext.SaveChanges();

        return true;
    }

    public bool Delete(SearchDto searchDto)
    {
        var contest = _applicationContext.Сontests.FirstOrDefault(contest => contest.Title == searchDto.Title && 
                                                                         contest.Date == searchDto.Date);

        if (contest != null)
        {
            _applicationContext.Сontests.Remove(contest);
            _applicationContext.SaveChanges();
            
            _photoService.Delete(TypesEnum.Сontest, contest.Id);

            return true;
        }
        
        return false;
    }
}