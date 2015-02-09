module App {
    export class Subcategory {
        constructor(name) {
            this.name = name;
        }
        name: string;
    }

    export class BaseViewModel {
        constructor() {
        }
        subcategories: Array<Subcategory>;


        portfolioActive(): void {
            PortfolioViewModel.SetPortfolioViewModel();
        }

        experienceActive(): void {
            ExperienceViewModel.SetExperienceViewModel();
        }

        aboutMeActive(): void {
            alert('not implemented yet');
        }
    }
} 