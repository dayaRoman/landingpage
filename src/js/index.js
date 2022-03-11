const menu = document.querySelectorAll(".menu__link");
const links = document.querySelectorAll("a");

function handleMenuClick(data) {
    document.querySelector(`.${data}`).scrollIntoView(true, {
        behavior: "smooth",
    });
}

menu.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        handleMenuClick(e.target.dataset.menuLink);
    });
});

