const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const historyList = document.getElementById("historyList");

// Button click
buttons.forEach(button => {
    button.addEventListener("click", (e) => {

        // Calculator Logic
        handleInput(button.innerText);

        // Ripple Effect
        const circle = document.createElement("span");
        circle.classList.add("ripple");

        const size = Math.max(button.clientWidth, button.clientHeight);
        circle.style.width = circle.style.height = size + "px";

        const rect = button.getBoundingClientRect();
        circle.style.left = (e.clientX - rect.left - size / 2) + "px";
        circle.style.top = (e.clientY - rect.top - size / 2) + "px";

        button.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 600);

    });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if ((key >= "0" && key <= "9") ||
        key === "+" || key === "-" ||
        key === "*" || key === "/" ||
        key === "." || key === "%") {
        handleInput(key);
    }

    else if (key === "Enter") {
        handleInput("=");
    }

    else if (key === "Backspace") {
        handleInput("⌫");
    }

    else if (key === "Escape") {
        handleInput("C");
    }
});

// Calculator Logic
function handleInput(value) {

    if (value === "C") {
        display.value = "";
    }

    else if (value === "⌫") {
        display.value = display.value.slice(0, -1);
    }

    else if (value === "=") {
    try {
        const expression = display.value;
        const result = eval(expression);

        display.value = result;

        const li = document.createElement("li");
        li.textContent = expression + " = " + result;
        historyList.prepend(li);

    } catch {
        display.value = "Error";
    }
}

    else {
        display.value += value;
    }
}
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeToggle.innerHTML = "☀️";
    }else{
        themeToggle.innerHTML = "🌙";
    }
});
const historyBtn = document.getElementById("historyBtn");
const history = document.querySelector(".history");

historyBtn.addEventListener("click", () => {
    if(history.style.display === "block"){
        history.style.display = "none";
    }else{
        history.style.display = "block";
    }
});