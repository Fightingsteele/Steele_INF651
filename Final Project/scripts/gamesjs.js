const games = [
    //I just grabbed games from my recently played on Steam
    {name: "HELLDIVERS 2", hours: 76.9, category: "FPS", img: "images/HD2.png"},
    {name: "Risk of Rain 2", hours: 337.4, category: "Roguelite", img: "images/RoR2.png"},
    {name: "FTL: Faster than Light", hours: 33.3, category: "Roguelite", img: "images/FTL.png"},
    {name: "Hotline Miami", hours: 5, category: "Action", img: "images/Miami.png" },
    {name: "The Elder Scrolls V: Skyrim Special Edition", hours: 241.1, category: "RPG", img: "images/Skyrim.png"},
    {name: "DOOM", hours: 2, category: "FPS", img: "images/DOOM.png"},
    {name: "Broforce", hours: 3.1, category: "Action", img: "images/Broforce.png"},
    {name: "Rimworld", hours: 570.7, category: "Strategy", img: "images/Rimworld.png"},
    {name: "Stellaris", hours: 1984.4, category: "Strategy", img: "images/Stellaris.png"},
    {name: "Stardew Valley", hours: 86.8, category: "Simulation", img: "images/Stardew.png"},
    {name: "Starfield", hours: 143.2, category: "RPG", img: "images/Starfield.png"},
    {name: "Fallout: New Vegas", hours: 60.7, category: "RPG", img: "images/Fallout NV.png"},
    {name: "Hollow Knight: Silksong", hours: 3.1, category: "Platformer", img: "images/Silksong.png"},
    {name: "Ultimate Chicken Horse", hours: 1.3, category: "Platformer", img: "images/Chicken Horse.png"},
];

const gameContainer = document.getElementById("gameContainer");
const filterCategory = document.getElementById("filterCategory");
const sorthours = document.getElementById("sorthours");

function rendergames(list) {
    gameContainer.innerHTML = "";

    list.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("game-card");

        card.innerHTML = `
            <img src="${game.img}" alt="${game.name}">
            <h3 class="game-name">${game.name}</h3>
            <p class="game-hours">${game.hours} hours played</p>
        `;

        gameContainer.appendChild(card);
    });
}

function applyFilters() {
    let filtered = [...games];

    const category = filterCategory.value;
    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }


    const sort = sorthours.value;
    if (sort === "low") {
        filtered.sort((a, b) => a.hours - b.hours);
    } else if (sort === "high") {
        filtered.sort((a, b) => b.hours - a.hours);
    }

    rendergames(filtered);
}

filterCategory.addEventListener("change", applyFilters);
sorthours.addEventListener("change", applyFilters);

rendergames(games);