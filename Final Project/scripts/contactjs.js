const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        statusMsg.textContent = "Please enter your name.";
        statusMsg.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        statusMsg.textContent = "Please enter a valid email address.";
        statusMsg.style.color = "red";
        return;
    }

    if (message.length < 5) {
        statusMsg.textContent = "Your message must be at least 5 characters.";
        statusMsg.style.color = "red";
        return;
    }

    statusMsg.textContent = "Message sent successfully!";
    statusMsg.style.color = "green";

    form.reset();
});