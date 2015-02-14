module App {

    export class Experience extends BaseCategory{
        constructor(name: string) {
            super(name);

            this.subcategories = [
                new FP(),
                new inSolutions()
            ];
        }
    }
} 