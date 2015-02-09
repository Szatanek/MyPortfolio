var App;
(function (App) {
    var viewModel;
    function setViewModel(viewModel) {
        if (this.viewModel) {
            ko.cleanNode($("#content")[0]);
            this.viewModel = null;
        }
        this.viewModel = viewModel;
        ko.applyBindings(viewModel, $("#content")[0]);
    }
    App.setViewModel = setViewModel;
})(App || (App = {}));
//# sourceMappingURL=App.js.map