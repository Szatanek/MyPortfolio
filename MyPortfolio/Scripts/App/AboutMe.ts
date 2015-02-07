module App {
    
    export class AboutMeViewModel extends BaseViewModel {

        public static CreateAboutMeViewModel() : void{
            App.viewModel = new AboutMeViewModel();
            ko.applyBindings();
        }
    }
} 