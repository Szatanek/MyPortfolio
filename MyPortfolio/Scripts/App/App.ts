module App {
    export var viewModel: ViewModel;

    $(document).ready(() => {
        viewModel = new App.ViewModel();
        ko.applyBindings(viewModel)
        viewModel.categories[0].active();
    });

}