let username = localStorage.getItem("username");

if (!username) {
    username = prompt("What is your name?");
    if (username) {
        localStorage.setItem("username", username);
    } else {
        username = "Guest";
    }
}

document.getElementById("welcome").textContent = `Welcome back, ${username}!`;

