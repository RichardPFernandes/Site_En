class MobileNavbar{
    constructor(Menu, navList, navLinks) {
        this.Menu = document.querySelector(Menu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks(){
        this.navLinks.forEach((link , index) => {
        link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards 
        ${index / 7 + 0.3}s`);
        });
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.Menu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent(){
        this.Menu.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.Menu) {
            this.addClickEvent();
        }
        return this;
    }

}
const Menu = new MobileNavbar(
    ".menu",
    ".navlist",
    ".navlist li",
);
Menu.init();
