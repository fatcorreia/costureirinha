using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Costureirinha.Models;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Costureirinha.Controllers
{
    [Route("api/[controller]")]
    public class LavandariaController : Controller
    {
        public List<Servico> Lavandaria
        {
            get
            {
                string json = System.IO.File.ReadAllText(@"files\lavandaria.json");
                return JsonConvert.DeserializeObject<List<Servico>>(json);
            }
        }

        // GET: api/values
        [HttpGet]
        public string Get()
        {
            return JsonConvert.SerializeObject(Lavandaria);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            Servico servico = Lavandaria.First(x => x.id == id);
            return JsonConvert.SerializeObject(servico);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
