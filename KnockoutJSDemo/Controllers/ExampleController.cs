using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KnockoutJSDemo.Models;

namespace KnockoutJSDemo.Controllers
{
    public class ExampleController : Controller
    {
        public ActionResult HelloWorld(){
            return View();
        }

        public ActionResult DependentObservable(){
            return View();
        }

        public ActionResult DependentObservableLong(){
            return View();
        }

        public ActionResult Templating(){
            return View();
        }

        public ActionResult Cascading(){
            return View();
        }

        public ActionResult CustomBinding(){
            return View();
        }

        public ActionResult JQueryIntegration(){
            return View();
        }

        [HttpGet]
        public ActionResult Mvc(){
            Person p = new Person { PersonId = 0, FirstName = "Test", LastName = "Person" };
            return View(p);
        }
   
        [HttpPost]
        public ActionResult Mvc(Person p)
        {
            if(!ModelState.IsValid){
                return View(p);
            }
            return Content(string.Format("{0} {1}",p.FirstName,p.LastName));
        }

        public ActionResult GoogleMaps(){
            return View();
        }

        public ActionResult Testing(){
            return View();
        }

        public ActionResult ToDoList(){
            return View();
        }

    }
}
