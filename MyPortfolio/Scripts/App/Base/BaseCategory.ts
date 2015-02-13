module App{
    export class BaseCategory {

        name: string;
        subcategories: Array<BaseSubcategory>;
        isSelected: KnockoutObservable<boolean>;
        subcategory: KnockoutObservable<BaseSubcategory>;

        constructor(name: string) {
            this.name = name;
            this.subcategories = [];
            this.isSelected = ko.observable(false);
            this.subcategory = ko.observable<BaseSubcategory>();
        }

        active(): void{
            viewModel.setCategory(this);
            this.isSelected(true);
        }

        setSubcategory(subcategory: BaseSubcategory): void {
            this.clearSubcategories();
            this.subcategory(subcategory);
        }

        private clearSubcategories(): void{
            ko.utils.arrayForEach(this.subcategories,(subcategory: BaseSubcategory) => {
                subcategory.isSelected(false);
            });
        }
    }
}