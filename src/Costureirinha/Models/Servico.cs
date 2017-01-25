using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Costureirinha.Models
{
    public class Servico
    {
        public int id { get; set; }
        public string nome { get; set; }
        public decimal preco { get; set; }
        
        public Servico() { }
    }
}
