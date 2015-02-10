module App {

    export class ExperienceCategory extends BaseCategory{
        constructor(name: string) {
            super(name);

            this.subcategories = [
                new BaseSubcategory('inSolutions'),
                new BaseSubcategory('Tectocom'),
                new BaseSubcategory('Future Processing')
            ];
        }
    }
} 