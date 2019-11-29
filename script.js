const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll(".nav-links li");


    burger.addEventListener("click", () => {
        //toggle nav
        nav.classList.toggle("nav-active");

        //animate links
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forward ${index / 7}s`;
            }
        });
        //burger animation
        burger.classList.toggle("toggle");
    });

}

//PARALLAX        //element distancr speed
function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
    parallax("header", window.scrollY, 0.5);
    parallax("nav", window.scrollY, 1);
    parallax(".intro-text", window.scrollY, 0.6);

    //parallax(".small-rose", window.scrollY, 0.4);
    //parallax(".big-rose", window.scrollY, 0.2);
});

mybutton = document.getElementById("myBtn");



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
navSlide();

//const app = ()=>{
//    navSlide();

//}