module App {
    var viewModel: BaseViewModel;

    export function setViewModel(viewModel: BaseViewModel): void{
        if (this.viewModel) {
            ko.cleanNode($("#content")[0]);
            this.viewModel = null;
        }


        this.viewModel = viewModel;
        ko.applyBindings(viewModel, $("#content")[0]);
    }
}