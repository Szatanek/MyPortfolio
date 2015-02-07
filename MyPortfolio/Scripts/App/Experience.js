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
            _super.apply(this, arguments);
        }
        ExperienceViewModel.CreateExperienceViewModel = function () {
            App.App.viewModel = new ExperienceViewModel();
            ko.applyBindings();
        };
        return ExperienceViewModel;
    })(App.BaseViewModel);
    App.ExperienceViewModel = ExperienceViewModel;
})(App || (App = {}));
//# sourceMappingURL=Experience.js.map