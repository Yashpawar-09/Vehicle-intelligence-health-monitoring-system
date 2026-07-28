const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

function buyNow() {
    alert("Thank you for your interest! Our team will contact you soon.");
}

function submitForm(event) {
    event.preventDefault();
    document.getElementById("message").innerText =
        "Form submitted successfully! We will get back to you soon.";
}

const specCards = document.querySelectorAll(".spec-card");

const revealSpecs = () => {
    const triggerBottom = window.innerHeight * 0.85;

    specCards.forEach(card => {
        const boxTop = card.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", revealSpecs);

const contactSection = document.querySelector(".contact");

window.addEventListener("scroll", () => {
    const sectionTop = contactSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
        contactSection.style.opacity = "1";
        contactSection.style.transform = "translateY(0)";
    }
});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop reload

    const button = form.querySelector("button");

    // Button loading effect
    button.innerText = "Sending...";
    button.disabled = true;

    setTimeout(() => {
        message.innerHTML = "✅ Message Sent Successfully!";
        message.style.opacity = "1";

        button.innerText = "Send Message";
        button.disabled = false;

        form.reset();
    }, 1500);
});