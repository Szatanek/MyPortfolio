module App {

    export class ViewModel {

        categories: Array<BaseCategory>;
        category: KnockoutObservable<BaseCategory>;
        getArticleHeight: KnockoutComputed<string>;

        constructor() {
            this.categories = [
                new Portfolio("Portfolio"),
                new ExperienceCategory("My experience"),
                new AboutMeCategory("About me")
            ];
            this.category = ko.observable<BaseCategory>(this.categories[0]);
            this.getArticleHeight = ko.computed<string>((): string => this.getHeight());
        }

        setCategory(category: BaseCategory): void {
            this.cleanCategories();
            this.category(category);
        }

        getCategoryWidth(): string {
            return (100 / this.categories.length).toString + '%';
        }

        getHeight(): string {
            if (this.category().subcategories.length > 0) {
                return $("#left-pane").height() - 100 + 10 + "px";
            }

            $("article").removeAttr("height");
            return '0px';
        }

        private cleanCategories(): void {
            ko.utils.arrayForEach(this.categories,(category: BaseCategory) => {
                category.isSelected(false);
            });
        }
    }
} 