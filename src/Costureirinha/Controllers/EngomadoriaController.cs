using Costureirinha.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ASPNETCoreRC2Angular2Demo.Controllers
{
    [Route("api/[controller]")]
    public class EngomadoriaController : Controller
    {
        public List<Servico> Engomadoria
        {
            get
            {
                string json = System.IO.File.ReadAllText(@"files\engomadoria.json");
                return JsonConvert.DeserializeObject<List<Servico>>(json);
            }
        }

        // GET: api/values
        [HttpGet]
        public string Get()
        {
            return JsonConvert.SerializeObject(Engomadoria);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            Servico servico = Engomadoria.First(x => x.id == id);
            return JsonConvert.SerializeObject(servico);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]string value)
        {
            return new CreatedAtRouteResult("anyroute", null);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]string value)
        {
            return new OkResult();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return new NoContentResult();
        }
    }
}
