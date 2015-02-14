module App {
    export class Portfolio extends BaseCategory {
        constructor(name: string) {
            super(name);

            this.subcategories = [
                new Reports(),
                new Paint(),
                new Meds(),
                new TCP()
            ];
        }
    }
}