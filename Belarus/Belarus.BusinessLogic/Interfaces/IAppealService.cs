using Belarus.Common.DTOs;

namespace Belarus.BusinessLogic.Interfaces;

public interface IAppealService
{
    void AppealSend(AppealDto model);
}