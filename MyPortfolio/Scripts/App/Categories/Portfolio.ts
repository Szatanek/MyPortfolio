module App {
    export class Portfolio extends BaseCategory {
        constructor(name: string) {
            super(name);

            this.subcategories = [
                new Reports(),
                new Paint(),
                // TODO: insert meds subcategory
                //new Meds(),
                new Laboratory()
            ];
        }
    }
}