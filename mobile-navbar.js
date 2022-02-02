class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation 
            ? (link.style.animation = "")
            : (link.style.animation = //"navLinkFade 1s ease forwards 0.3s");
            `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`)
        });
    }
    

    handleClick() {
        //console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();

    }


    addClickEvent () {
        this.mobileMenu.addEventListener("click" , this.handleClick);            
            
            //("click" , () => console.log("Estou funcionando"));  -> Só para o teste inicial
    }

    init () {
        if (this.mobileMenu) {

            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar (
     ".mobile-menu", ".nav-list" , ".nav-list li" ,
    );

mobileNavbar.init();