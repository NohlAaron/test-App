using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace my_new_app.Controllers
{   
    [ApiController]
    [Route("api/[controller]")]
    public class RpsController : ControllerBase
    {
        private static string[] choice = new[]
        {
            "Rock", "Paper", "Scissors", 
        };
         [HttpGet]
         public List<string> Get()
        {
            List<string> computerChoice = new List<string>();
            Random random = new Random();
            computerChoice.Add(choice[random.Next(choice.Length)]);
            return computerChoice;
        }
    }
}