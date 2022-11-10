using Belarus.Common.DTOs;

namespace Belarus.BusinessLogic.Interfaces;

public interface IAuthService
{
    string CheckAuthorization(AuthDto authDto);
}