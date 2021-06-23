using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace my_new_app.Controllers
{
    [Route("api/[dice]")]
    public class DiceController : Controller
    {
        [HttpGet]
        public List<int> Get()
        {
            List<int> dicelist =new List<int>();
            Random random = new Random();
            dicelist.Add(random.Next(1,7)); //picks number from 1 to 6
            dicelist.Add(random.Next(1,7));
            return dicelist;
        }
    }
}
