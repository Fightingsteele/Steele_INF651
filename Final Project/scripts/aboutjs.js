const toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        content.classList.toggle('hiddentext');
    });
});

const switchImage = document.getElementById("switchImage");
const imageDesc = document.getElementById("imageDesc");

const images = [
    {src: "images/RoR2.png", about: "Risk of Rain 2"},
    {src: "images/Rimworld.png", about: "Rimworld"},
    {src: "images/Stellaris.png", about: "Stellaris"}
];

let index = 0;

switchImage.addEventListener("click", () => {
    index = (index + 1) % images.length;
    switchImage.src = images[index].src;
    switchImage.alt = images[index].about;
    imageDesc.textContent = images[index].about;
});