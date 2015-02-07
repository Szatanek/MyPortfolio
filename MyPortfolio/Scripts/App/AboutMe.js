var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    var AboutMeViewModel = (function (_super) {
        __extends(AboutMeViewModel, _super);
        function AboutMeViewModel() {
            _super.apply(this, arguments);
        }
        AboutMeViewModel.CreateAboutMeViewModel = function () {
            App.App.viewModel = new AboutMeViewModel();
            ko.applyBindings();
        };
        return AboutMeViewModel;
    })(App.BaseViewModel);
    App.AboutMeViewModel = AboutMeViewModel;
})(App || (App = {}));
//# sourceMappingURL=AboutMe.js.map