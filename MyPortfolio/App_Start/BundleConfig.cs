using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace MyPortfolio.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/base")
                .Include("~/Scripts/jquery-{version}.js")
                .Include("~/Scripts/modernizr-{version}.js")
                .Include("~/Scripts/knockout-{version}.js"));

            bundles.Add(new ScriptBundle("~/Scripts/application")
                .Include("~/Scripts/App/App.js")
                .Include("~/Scripts/App/ViewModel.js")
                .Include("~/Scripts/App/Base/BaseCategory.js")
                .Include("~/Scripts/App/Base/BaseSubcategory.js")
                .Include("~/Scripts/App/Categories/AboutMe.js")
                .Include("~/Scripts/App/Categories/Experience.js")
                .Include("~/Scripts/App/Categories/Portfolio.js"));

            bundles.Add(new ScriptBundle("~/Styles/layout")
                .Include("~/Content/App.css")
                .Include("~/Content/AboutMe.css")
                .Include("~/Content/Experience.css")
                .Include("~/Content/Portfolio.css"));
        }
    }
}