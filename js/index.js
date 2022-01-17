// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelectorAll('.nav__link')

// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//     })
// })

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav')

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




// console.log(nav.getAttribute("data-visible"))

// navToggle.addEventListener("click", () => {

//     const open = nav.getAttribute = "data-visible"
//     console.log(open)
//     nav.style.transform = "translateX(100%)"
// })