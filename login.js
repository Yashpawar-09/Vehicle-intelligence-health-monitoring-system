const wrapper = document.querySelector(".auth-wrapper");
const registerBtn = document.querySelector(".register-trigger");
const loginBtn = document.querySelector(".login-trigger");

// Switch to Signup
registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.add("toggled");
});

// Switch to Login
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.remove("toggled");
});

// LOGIN REDIRECT
const signinForm = document.getElementById("signinForm");

signinForm.addEventListener("submit", function(e) {
    e.preventDefault();   // stop refresh

    const loginButton = this.querySelector(".submit-button");
    loginButton.innerText = "Logging in...";
    loginButton.disabled = true;

    setTimeout(() => {
        window.location.href = "model file/model.html";  
    }, 1500);
});

