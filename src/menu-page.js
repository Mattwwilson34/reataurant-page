const Menu = {
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
        this.menuItemWrapper = document.createElement('div');
        this.menuItemContainers = [];
        this.menuItemImgs = [];
        this.menuItemText = [];
        this.menuItemPrice = [];
        for (let i = 0; i < 4; i++) {
            const menuItemContainer = document.createElement('div');
            const menuItemImg = document.createElement('img');
            const menuItemText = document.createElement('p');
            const menuItemPrice = document.createElement('p');
            this.menuItemContainers.push(menuItemContainer);
            this.menuItemImgs.push(menuItemImg);
            this.menuItemText.push(menuItemText);
            this.menuItemPrice.push(menuItemPrice);
        }
    },
    addClasses: function () {
        this.contentWrapper.classList = 'content-wrapper';
        this.content.classList = 'content';
        this.titleContainer.classList = 'title-container';
        this.title.classList = 'title';
        this.menuItemWrapper.classList = 'menu-item-wrapper';
        this.menuItemContainers.forEach((container) => {
            container.classList = 'menu-item-container';
        });
        this.menuItemImgs.forEach((img) => {
            img.classList = 'menu-item-img';
        });
        this.menuItemText.forEach((text) => {
            text.classList = 'menu-item-text';
        });
        this.menuItemPrice.forEach((price) => {
            price.classList = 'menu-item-price';
        });
    },
    addText: function () {
        this.title.textContent = 'Menu';
        this.menuItemImgs.forEach((img) => {
            img.src = '../cone1.svg';
        });
        this.menuItemText.forEach((text) => {
            text.textContent = 'Space Cone';
        });
        this.menuItemPrice.forEach((price) => {
            price.textContent = '$3.99';
        });
    },
    appendElements: function () {
        this.body.append(this.contentWrapper);
        this.contentWrapper.append(this.content);
        this.content.append(this.titleContainer);
        this.titleContainer.append(this.title);
        this.content.append(this.menuItemWrapper);
        this.menuItemContainers.forEach((container, i) => {
            this.menuItemWrapper.append(container);
            container.append(this.menuItemText[i], this.menuItemImgs[i], this.menuItemPrice[i]);
        });
    },
};

export { Menu };
