// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction();
    console.log("sad");
};

function scrollFunction() {
    if (window.scrollY > 80) {
        document.getElementById("ham").style.marginTop = "42.5px";
        document.querySelector(".logo").classList.add("logosmall");
        document.getElementById("navbar").classList.add("smallheight");
        document.getElementById("navbar").classList.add("smallmine");
    } else if (window.scrollY == 0) {
        document.querySelector(".logo").classList.remove("logosmall");
        document.getElementById("ham").style.marginTop = "62.5px";
        document.getElementById("navbar").classList.remove("smallmine");
        document.getElementById("navbar").classList.remove("smallheight");
    }
}
window.onload = function () {
    if (window.innerWidth <= 877) {
        document.getElementById("ham").classList.remove("hide");
    } else {
        document.getElementById("navbar-right").classList.remove("hide");
    }
};
function Hambar(ham) {
    ham.classList.toggle("change");
    document.getElementById("navbar-right").classList.toggle("hide");
    document.getElementById("navbar").classList.toggle("height");
}
