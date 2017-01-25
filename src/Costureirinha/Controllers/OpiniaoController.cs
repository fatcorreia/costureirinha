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
    public class OpiniaoController : Controller
    {
        private string file = @"files\opinioes.json";

        public List<Opiniao> Opinioes
        {
            get
            {
                string json = System.IO.File.ReadAllText(file);
                return JsonConvert.DeserializeObject<List<Opiniao>>(json);
            }

            set { }
        }

        // GET: api/values
        [HttpGet]
        public string Get()
        {
            return JsonConvert.SerializeObject(Opinioes);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            Opiniao opiniao = Opinioes.First(x => x.id == id);
            return JsonConvert.SerializeObject(opiniao);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]object value)
        {
            //Opinioes = JsonConvert.DeserializeObject<List<Opiniao>>(value);

            System.IO.File.WriteAllText(file, value.ToString());
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
