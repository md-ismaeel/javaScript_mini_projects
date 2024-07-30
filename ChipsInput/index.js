const form = document.querySelector(".form");
const inputEl = document.querySelector("#inputEl");
const box = document.querySelector(".box");

const handleChange = (e) => {
    let text = e.target.value;
    // console.log(text);

    if (box.lastElementChild && box.lastElementChild.tagName === 'P') {
        box.lastElementChild.textContent = text;
    }
}

const handleForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    let container = document.createElement("div");
    container.classList.add("item-container");

    let newEl = document.createElement("p");
    newEl.textContent = inputEl.value;
    newEl.classList.add("para");

    let x = document.createElement("span");
    x.textContent = "X";
    x.classList.add("remove-btn");

    container.appendChild(newEl);
    container.appendChild(x);

    if (inputEl.value.trim() !== "") {
        box.appendChild(container);
    }

    inputEl.value = "";
}

// Handle click events on the box to remove paragraphs
box.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
        const container = e.target.parentElement;
        box.removeChild(container);
    }
});

form.addEventListener("submit", handleForm);
inputEl.addEventListener("input", handleChange);
