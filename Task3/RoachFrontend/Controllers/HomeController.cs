using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using RoachFrontend.Models;
using RoachFrontend.Services;

namespace RoachFrontend.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Тараканьи Бега.";

            return View();
        }

        public ActionResult Manage()
        {
            return View();
        }

        public ActionResult Stats()
        {
            List<UserStat> statistics;
            using (var statSvc = new StatService(ConfigurationManager.ConnectionStrings["db"].ConnectionString))
            {
                statistics = statSvc.GetStatistics().ToList();
            }
            var data = JsonConvert.SerializeObject(new
            {
                stats = statistics,
                success = true
            });
            return Content(data);
        }


        public ActionResult SaveStats(string data)
        {
            var userStat = JsonConvert.DeserializeObject<UserStat>(data);
            using (var statSvc = new StatService(ConfigurationManager.ConnectionStrings["db"].ConnectionString))
            {
                statSvc.AddStat(userStat);
            }
            return Content("OK");
        }
    }
}