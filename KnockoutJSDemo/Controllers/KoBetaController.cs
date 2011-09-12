using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KnockoutJSDemo.Controllers
{
    public class KoBetaController : Controller
    {
       public ActionResult Index(){
           return View();
       }

        public ActionResult ControlFlowBindings()
        {
            return View();
        }

        public ActionResult WithBinding(){
            return View();
        }

        public ActionResult BindingProviders(){
            return View();
        }

    }
}
