const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if(email === "" || password === ""){
        alert('All form fields must be filled in');
    } 

    const submissionForm = {
        email,
        password
    }
    console.log(submissionForm);
    form.reset();
})
form.style.display = "flex";
form.style.flexWrap = "wrap";
form.style.gap = "8px";



