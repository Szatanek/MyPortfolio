var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    var PortfolioViewModel = (function (_super) {
        __extends(PortfolioViewModel, _super);
        function PortfolioViewModel() {
            _super.call(this);
            this.subcategories = [
                new App.Subcategory("first subcategory"),
                new App.Subcategory("second subcategory"),
                new App.Subcategory("Another subcategory")
            ];
        }
        PortfolioViewModel.SetPortfolioViewModel = function () {
            var viewModel = new PortfolioViewModel();
            App.setViewModel(viewModel);
            alert('Portfolio view model set');
        };
        return PortfolioViewModel;
    })(App.BaseViewModel);
    App.PortfolioViewModel = PortfolioViewModel;
    App.PortfolioViewModel.SetPortfolioViewModel();
})(App || (App = {}));
//# sourceMappingURL=Portfolio.js.map