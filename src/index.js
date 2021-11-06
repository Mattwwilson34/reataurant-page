import { Home } from './home-page';
import { Menu } from './menu-page';
import { Contact } from './contact-page';
import './style.css';

const TabController = {
    init: function () {
        this.getNavLinks();
        this.bindEvents();
    },

    render: function (e) {
        const clickedLink = e.target;
        const clickedLinkText = e.target.innerText;

        switch (clickedLinkText) {
            case 'Home':
                TabController.toggleActiveTab(clickedLink);
                TabController.deleteContent();
                Home.render();
                break;
            case 'Menu':
                TabController.toggleActiveTab(clickedLink);
                TabController.deleteContent();
                Menu.render();
                break;
            case 'Contact':
                TabController.toggleActiveTab(clickedLink);
                TabController.deleteContent();
                Contact.render();
                break;
            default:
                break;
        }
    },

    getNavLinks: function () {
        this.homeLink = document.getElementById('home');
        this.menuLink = document.getElementById('menu');
        this.contactLink = document.getElementById('contact');
    },

    bindEvents: function () {
        this.homeLink.addEventListener('click', this.render);
        this.menuLink.addEventListener('click', this.render);
        this.contactLink.addEventListener('click', this.render);
    },

    toggleActiveTab: function (activePage) {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.navLinks.forEach((link) => {
            link.classList = 'nav-link';
        });
        activePage.classList = 'nav-link active-tab';
    },

    deleteContent: function () {
        this.content = document.querySelector('.content-wrapper');
        this.content.remove();
    },
};
TabController.init();
Home.render();
