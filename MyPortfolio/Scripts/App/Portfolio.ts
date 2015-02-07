module App {
    
    export class PortfolioViewModel extends BaseViewModel {

        public static createPortfolioViewModel(): void {
            App.viewModel = new PortfolioViewModel();
            ko.applyBindings();
        }
    }
}