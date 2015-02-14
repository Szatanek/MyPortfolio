module App {
    export class BaseSubcategory {

        isSelected: KnockoutObservable<boolean>;
        name: string;

        constructor(name: string) {
            this.name = name;
            this.isSelected = ko.observable(false);
        }

        toggleSelected() {
            if (this.isSelected()) {
                viewModel.category().clearSubcategory();
                return;
            }

            viewModel.category().setSubcategory(this);
            this.isSelected(true);
        }
    }
} 