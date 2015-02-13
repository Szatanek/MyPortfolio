module App {
    export class BaseSubcategory {

        isSelected: KnockoutObservable<boolean>;
        name: string;

        constructor(name: string) {
            this.name = name;
            this.isSelected = ko.observable(false);
        }

        active() {
            viewModel.category().setSubcategory(this);
            this.isSelected(true);
        }
    }
} 