module App {
    export class Portfolio extends BaseCategory {
        constructor(name: string) {
            super(name);

            this.subcategories = [
                new BaseSubcategory("first subcategory"),
                new BaseSubcategory("second subcategory"),
                new BaseSubcategory("Another subcategory")
            ];
        }
    }
}