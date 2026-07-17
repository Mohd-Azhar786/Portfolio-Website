alert("Hello 👋 Guy's I am Mohd Azhar! Welcome to My Portfolio 🚀");
let name = "Mohd Azhar";

console.log("Welcome " + name);
function goToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}
const texts = [
    "Future Full Stack Developer 🚀",
    "Web Developer 💻"
];

let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        document.getElementById("typing").innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    if (charIndex > 0) {
        document.getElementById("typing").innerHTML =
            texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 300);
    }
}

typeText();

function goToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function changeTheme() {
    document.body.classList.toggle("light-mode");

    let btn = document.getElementById("themeBtn");

    if(document.body.classList.contains("light-mode")){
        btn.innerHTML = "☀️";
    }else{
        btn.innerHTML = "🌙";
    }
}
const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    hiddenElements.forEach((el) => {
        const position = el.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});