module App {

    export class ViewModel {

        categories: Array<BaseCategory>;
        category: KnockoutObservable<BaseCategory>;

        constructor() {
            this.categories = [
                new AboutMeCategory("About me"),
                new ExperienceCategory("My experience"),
                new Portfolio("Portfolio")
            ];

            this.category = ko.observable(this.categories[2]);
        }


        portfolioActive(): void {
            this.category(this.categories[2]);
        }

        experienceActive(): void {
            this.category(this.categories[1]);
        }

        aboutMeActive(): void {
            this.category(this.categories[0]);
        }
    }
} 