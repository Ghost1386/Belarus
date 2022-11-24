using Newtonsoft.Json;

namespace Belarus.Model;

public class ErrorDetails
{
    public int StatusCode { get; set; }
    
    public string Message { get; set; }
    
    public string Error { get; set; }

    public override string ToString()
    {
        return JsonConvert.SerializeObject(this);
    }
}