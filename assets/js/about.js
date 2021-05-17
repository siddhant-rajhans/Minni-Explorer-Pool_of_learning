const position = document.getElementById("card-change-text");
window.onscroll = () => {
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
    if (window.scrollY > 400 && window.scrollY < 700) {
        position.style.setProperty("--x", 600 + "%");
    } else {
        position.style.setProperty("--x", window.scrollY + "%");
    }
};
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
document.querySelectorAll(".card").forEach((Element, index) => {
    Element.addEventListener("click", () => {
        changetext(index, index);
    });
});
function changetext(color, i) {
    document.querySelectorAll(".card").forEach((Element, index) => {
        Element.classList.remove("selected");
        if (i === index) {
            Element.classList.add("selected");
        }
    });
    let heading = "";
    let Text = "";
    let Text1 = "";
    let Text2 = "";
    if (color == 0) {
        heading = `Welcome to ME`;
        Text = "Preschool - A POOL OF LEARNING";
        Text1 = "Daycare - a home away from home";
        Text2 = `Dear all We believe that a good preschool is one that blunts
                                weaknesses and provides a stimulating environment for
                                Social, emotional and intellectual development of a child
                                and prepares them well with all requisite concepts and
                                skills necessary for the next step of learning. ME is very
                                unique and special in its own way of imparting early
                                childhood education programs .I along with my team would be
                                delighted to welcome you for a visit to the dynamic and
                                energetic learning environment of our school.`;
        document.getElementById("text1").style.textAlign = "center";
    } else if (color == 2) {
        heading = `Culture and values`;
        Text =
            "We stand to maintain a culture for all kids a sense of belonging and safe feelings.";
        Text1 = "";
        Text2 = `➢	Value diversity and beliefs as every child is unique in his/her own perspectives, ideas, knowledge and culture and that proves to be a great strength to our social environment.<br />
                             ➢	Respecting the environment in which we  exist -: the people, the place, the culture and tradition.<br />
                             ➢	Based upon the basic values of society which gives an image to the child to build foundations for life. `;
        document.getElementById("text1").style.textAlign = "left";
    } else if (color == 1) {
        heading = `OUR OBJECTIVES `;
        Text = "We build our practice from our mission and goals for :-";
        Text1 = "";
        Text2 = `●	Launching our foundation for tomorrow.<br />
                                 ●	To provide ample opportunities to various kinds of activities and simply be at themselves in action, skills and conscious thoughts as we strongly believe that natural growth occurs when children have lots of fun.<br />
                                 ●	Developing interest and knowledge through ‘learning by doing’ technique with our scientifically designed beyond the curriculum methodology.<br />
                                 ●	Ensuring to provide real life experiences.
                                `;
        document.getElementById("text1").style.textAlign = "left";
    }
    document.getElementById("heading").innerHTML = heading;
    document.getElementById("text").innerHTML = `${Text} <br /> ${Text1}`;
    document.getElementById("text1").innerHTML = Text2;
}
