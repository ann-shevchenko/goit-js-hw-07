const nameInput = document.querySelector("#name-input");
const greetingSpan = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
    const name = nameInput.value.trim();
    greetingSpan.textContent = name || "Anonymous";   
});

