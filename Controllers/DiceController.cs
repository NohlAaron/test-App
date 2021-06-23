using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace my_new_app.Controllers
{   
    [ApiController]
    [Route("api/[controller]")]
    public class DiceController : ControllerBase
    {
        [HttpGet] // dicehighestvalue = inclusive highest random value( 1 to highvalue)
        public List<int> Get(int diceHighestValue = 6)
        {
            List<int> dicelist =new List<int>();
            Random random = new Random();
            dicelist.Add(random.Next(1,diceHighestValue+1)); //picks number from 1 to highest value
            dicelist.Add(random.Next(1,diceHighestValue+1));
            return dicelist;
        }
    }
}
