using Belarus.Common.DTOs;

namespace Belarus.BusinessLogic.Interfaces;

public interface IEmailService
{
    Task<bool> AppealBody(AppealDto appealDto);

    Task<bool> IntroductionBody(IntroductionDto introductionDto);
}