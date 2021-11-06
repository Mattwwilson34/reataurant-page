const Home = {
    render: function () {
        this.createElements();
        this.addClasses();
        this.addText();
        this.appendElements();
    },
    createElements: function () {
        this.body = document.querySelector('body');
        this.contentWrapper = document.createElement('div');
        this.content = document.createElement('div');
        this.titleContainer = document.createElement('div');
        this.title = document.createElement('h1');
        this.descriptionContainer = document.createElement('div');
        this.description = document.createElement('p');
        this.descriptionAuthor = document.createElement('p');
    },
    addClasses: function () {
        this.contentWrapper.classList = 'content-wrapper';
        this.content.classList = 'content';
        this.titleContainer.classList = 'title-container';
        this.title.classList = 'title';
        this.descriptionContainer.classList = 'description-container';
        this.description.classList = 'description';
        this.descriptionAuthor.classList = 'description-author';
    },
    addText: function () {
        this.title.textContent = "Swily's Ice Cream";
        this.description.textContent = `My taste buds are still dancing from our last visit! 
        This was one of the best ice cream cones I've had grace my taste buds in a long time. 
        Everything was just so yummy!`;
        this.descriptionAuthor.textContent = '-Matt Wilson';
    },
    appendElements: function () {
        this.body.append(this.contentWrapper);
        this.contentWrapper.append(this.content);
        this.content.append(this.titleContainer, this.descriptionContainer);
        this.titleContainer.append(this.title);
        this.descriptionContainer.append(this.description, this.descriptionAuthor);
    },
};

export { Home };
