console.log("wsup wsup wsup man");
// HAMBURGER MENU OPENEN
var hamburgerButton = document.querySelector("header button");

function klapUit(){
    let deNav = document.querySelector("nav");

    document.body.classList.add("toonNav");
}
hamburgerButton.addEventListener("click", klapUit);

// HAMBURGER MENU SLUITEN
var mainButton = document.querySelector("main");

function klapIn(){
    let deNav = document.querySelector("nav");

    document.body.classList.remove("toonNav");
}
mainButton.addEventListener("click", klapIn);

// CLOSING THE APP ADVERTISEMENT
var AppAdKruisje = document.querySelector(".app button");
var AppSection = document.querySelector(".app");

if (AppAdKruisje != null) {
    AppAdKruisje.addEventListener("click", sluitAdvertentie);

    function sluitAdvertentie() {
        AppSection.remove();
    }    
}

