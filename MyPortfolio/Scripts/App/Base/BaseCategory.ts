module App{
    export class BaseCategory {

        name: string;
        subcategories: Array<BaseSubcategory>;

        constructor(name: string) {
            this.name = name;
            this.subcategories = [];
        }
    }
}