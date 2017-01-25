using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Costureirinha.Models
{
    public class Opiniao
    {
        public int id { get; set; }
        public string autor { get; set; }
        public int estrelas { get; set; }
        public string texto { get; set; }
        
        public Opiniao() { }
    }
}
