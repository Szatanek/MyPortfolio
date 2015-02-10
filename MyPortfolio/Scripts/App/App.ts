module App {

    $(document).ready(() => {
        var viewModel: App.ViewModel;
        viewModel = new App.ViewModel();
        ko.applyBindings(viewModel)
    });

}