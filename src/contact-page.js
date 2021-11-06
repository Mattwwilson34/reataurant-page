const Contact = {
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
        this.contactInfo = document.createElement('p');
    },
    addClasses: function () {
        this.contentWrapper.classList = 'content-wrapper';
        this.content.classList = 'content';
        this.titleContainer.classList = 'title-container';
        this.title.classList = 'title';
        this.descriptionContainer.classList = 'description-container';
        this.contactInfo.classList = 'contact-info';
    },
    addText: function () {
        this.title.textContent = 'We would love to hear from you!';
        this.contactInfo.innerHTML = `
        <span>Swily's Ice Cream Shop</span>
        <span>1234 Totaly Real Street</span>
        <span>Philadelphia, PA, 12345</span>
        <span>Phone - (999) 999-9999</span>
        <span>Email - NotFake@email.com</span>
        `;
    },
    appendElements: function () {
        this.body.append(this.contentWrapper);
        this.contentWrapper.append(this.content);
        this.content.append(this.titleContainer, this.descriptionContainer);
        this.titleContainer.append(this.title);
        this.descriptionContainer.append(this.contactInfo);
    },
};

export { Contact };
