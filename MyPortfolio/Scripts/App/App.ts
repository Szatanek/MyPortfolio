module App {

    export class App {
        constructor() {
            PortfolioViewModel.createPortfolioViewModel();
        }

        static viewModel: BaseViewModel;
    }
}