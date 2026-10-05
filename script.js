const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 56,
        grabCursor: true,
        breakpoints: {
            0: { spaceBetween: 24 },
            700: { spaceBetween: 56 }
        },
    });
}
function menuAnimation() {
    var menu = document.querySelector("nav button")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var menuLinks = document.querySelectorAll("#full-div1 a")

    function setMenuOpen(isOpen) {
        full.classList.toggle("is-open", isOpen)
        menu.setAttribute("aria-expanded", String(isOpen))
        menu.textContent = isOpen ? "Close" : "Menu"
        navimg.style.opacity = isOpen ? 0 : 1
    }

    menu.addEventListener("click", function () {
        setMenuOpen(menu.getAttribute("aria-expanded") !== "true")
    })

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            setMenuOpen(false)
        })
    })

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            setMenuOpen(false)
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()