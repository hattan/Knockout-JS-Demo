using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html;
namespace KnockoutJSDemo.Helpers
{
    public static class HtmlHelperExtension
    {
        public static MvcHtmlString NavLink(this HtmlHelper helper,string linkText,string actionName,string controllerName){
            string action = helper.ViewContext.RouteData.Values["action"].ToString();
            string controller = helper.ViewContext.RouteData.Values["controller"].ToString();
            bool selected = (action == actionName && controller == controllerName);

            return helper.ActionLink(linkText, actionName, controllerName, null,new{@class = (selected ? "selected" : "")});
        }
    }
}