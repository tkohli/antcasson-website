const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav')
// const logo = document.querySelector("#logo")

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        nav.style.transform = "translateX(0)"
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        nav.style.transform = "translateX(100%)"
    }
})

logo.addEventListener("click", () => {
    logo.style.position = "absolute"
    logo.style.transform = "translateX(10%)"
})


