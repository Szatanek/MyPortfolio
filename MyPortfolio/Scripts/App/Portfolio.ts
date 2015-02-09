module App {
    export class PortfolioViewModel extends BaseViewModel {
        constructor() {
            super();
            this.subcategories = [
                new Subcategory("first subcategory"),
                new Subcategory("second subcategory"),
                new Subcategory("Another subcategory")
            ];
        }

        public static SetPortfolioViewModel(): void {
            var viewModel = new PortfolioViewModel();
            setViewModel(viewModel);
            alert('Portfolio view model set');
        }
    }

    App.PortfolioViewModel.SetPortfolioViewModel();
}