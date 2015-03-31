using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin.Security;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class ButtonController : Controller
    {
        //
        // GET: /Button/
        public ActionResult Button()
        {
            return View();
        }
    }
}