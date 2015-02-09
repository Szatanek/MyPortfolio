module App {

    export class ExperienceViewModel extends BaseViewModel{
        constructor() {
            super();

            this.subcategories = [
                new Subcategory('inSolutions'),
                new Subcategory('Tectocom'),
                new Subcategory('Future Processing')
            ];
        }

        public static SetExperienceViewModel(): void {
            var viewModel = new ExperienceViewModel();
            setViewModel(viewModel);
            alert('Experience view model set');
        }
    }
} 