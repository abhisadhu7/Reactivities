using System;

namespace Domain
{
    public class Value
    {
        public int Id {get; set;}
        // auto implemented properties
        // entity framework is convention based - i.e the naming plays a major role - if we name the int as id, the EF framework
        // recognises it as a primary key.
        // CODE-FIRST - we write the code first and then generate script to generate a database - to do this we need to use dbcontext
        


        public string Name { get; set; }
    }
}
