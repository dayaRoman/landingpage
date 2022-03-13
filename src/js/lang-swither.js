export default {
    switchLanguage() {
        const langSwitchLinks = document.querySelectorAll(
            ".lang-switcher__link"
        );

        langSwitchLinks.forEach((item) => {
            item.addEventListener("click", function toggle(event) {
                langSwitchLinks.forEach((link) => {
                    link.classList.remove("active");
                });
                item.classList.add("active");
            });
        });
    },
};
