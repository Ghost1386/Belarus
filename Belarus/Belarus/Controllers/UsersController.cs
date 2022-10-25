using Belarus.Models;
using Microsoft.AspNetCore.Mvc;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    [Route("post")]
    [HttpPost]
    public void Post([FromBody] User user)
    {
        if (user is not null)
        {
            
        }
    }
    
    [Route("post2")]
    [HttpPost]
    public void Post2([FromBody] User user)
    {
        if (user is not null)
        {
            
        }
    }
}