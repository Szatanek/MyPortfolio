var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    var ExperienceViewModel = (function (_super) {
        __extends(ExperienceViewModel, _super);
        function ExperienceViewModel() {
            _super.call(this);
            this.subcategories = [
                new App.Subcategory('inSolutions'),
                new App.Subcategory('Tectocom'),
                new App.Subcategory('Future Processing')
            ];
        }
        ExperienceViewModel.SetExperienceViewModel = function () {
            var viewModel = new ExperienceViewModel();
            App.setViewModel(viewModel);
            alert('Experience view model set');
        };
        return ExperienceViewModel;
    })(App.BaseViewModel);
    App.ExperienceViewModel = ExperienceViewModel;
})(App || (App = {}));
//# sourceMappingURL=Experience.js.map