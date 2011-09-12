using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KnockoutJSDemo.Models
{
    public class Person
    {
        public int PersonId { get; set; }

        [Required(ErrorMessage="First Name is required")]
        public string FirstName { get; set; }

        public string LastName { get; set; }
    }
}