const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll(".nav-links li");
   

    burger.addEventListener("click", () => {
        //toggle nav
        nav.classList.toggle("nav-active");

        //animate links
        navlinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else{
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

window.addEventListener("scroll", function() {
    parallax("header", window.scrollY, 0.5);
    parallax("nav", window.scrollY, 1);
    parallax(".intro-text", window.scrollY, 0.6);
    
    //parallax(".small-rose", window.scrollY, 0.4);
    //parallax(".big-rose", window.scrollY, 0.2);
});
//HANDSHAKE BUTTON
window.open(
    'https://app.joinhandshake.com/users/2744767',
    '_blank' // <- This is what makes it open in a new window.
  );

navSlide();

//const app = ()=>{
//    navSlide();
    
//}