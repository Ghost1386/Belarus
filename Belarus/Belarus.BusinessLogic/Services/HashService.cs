using Belarus.BusinessLogic.Interfaces;
using System.Text;

namespace Belarus.BusinessLogic.Services;

public class HashService : IHashService
{
    private const int HashNumber = 1;

    public string Hash(string password)
    {
        var hashPassword = new StringBuilder();

        hashPassword.Append(FirstHalfHash(password[..3]));
        hashPassword.Append(SecondHalfHash(password[3..]));

        return hashPassword.ToString();
    }

    private static string FirstHalfHash(string firstHalf)
    {
        var stringBuilder = new StringBuilder();

        foreach (var symbol in firstHalf)
        {
            stringBuilder.Append(Convert.ToChar(Convert.ToInt32(symbol) + HashNumber));
        }

        return stringBuilder.ToString();
    }

    private static string SecondHalfHash(string secondHalf)
    {
        var stringBuilder = new StringBuilder();

        foreach (var symbol in secondHalf)
        {
            stringBuilder.Append(Convert.ToChar(Convert.ToInt32(symbol) - HashNumber));
        }

        return stringBuilder.ToString();
    }
}