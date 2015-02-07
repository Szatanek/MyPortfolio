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
            _super.apply(this, arguments);
        }
        PortfolioViewModel.createPortfolioViewModel = function () {
            App.App.viewModel = new PortfolioViewModel();
            ko.applyBindings();
        };
        return PortfolioViewModel;
    })(App.BaseViewModel);
    App.PortfolioViewModel = PortfolioViewModel;
})(App || (App = {}));
//# sourceMappingURL=Portfolio.js.map