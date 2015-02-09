var App;
(function (App) {
    var Subcategory = (function () {
        function Subcategory(name) {
            this.name = name;
        }
        return Subcategory;
    })();
    App.Subcategory = Subcategory;
    var BaseViewModel = (function () {
        function BaseViewModel() {
        }
        BaseViewModel.prototype.portfolioActive = function () {
            App.PortfolioViewModel.SetPortfolioViewModel();
        };
        BaseViewModel.prototype.experienceActive = function () {
            App.ExperienceViewModel.SetExperienceViewModel();
        };
        BaseViewModel.prototype.aboutMeActive = function () {
            alert('not implemented yet');
        };
        return BaseViewModel;
    })();
    App.BaseViewModel = BaseViewModel;
})(App || (App = {}));
//# sourceMappingURL=BaseViewModel.js.map