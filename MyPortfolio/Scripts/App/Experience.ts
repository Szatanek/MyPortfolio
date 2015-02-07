module App {

    export class ExperienceViewModel extends BaseViewModel{

        public static CreateExperienceViewModel() {
            App.viewModel = new ExperienceViewModel();
            ko.applyBindings();
        }
    }
} 