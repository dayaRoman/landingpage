export default {
    burgerMenu() {
        const burger = document.querySelector(".burger-menu");
        const burgerButton = burger.querySelector(".burger-menu__button");
        const burgerMenuNav = burger.querySelector(".burger-menu__nav");
        burgerButton.addEventListener("click", () => {
            burger.classList.toggle("burger-menu_active");
        });
        burgerMenuNav.addEventListener("click", (e) => {
            if (!e.target.classList.contains("lang-switcher__link")) {
                burger.classList.toggle("burger-menu_active");
            }
        });
    },
};
