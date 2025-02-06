import { Player, PlayerStats } from "./player.js";

const LEFT_SIDEBAR = document.body.querySelector(
    ".sidebar-container.left .player-card-sidebar",
);
const RIGHT_SIDEBAR = document.body.querySelector(
    ".sidebar-container.right .player-card-sidebar",
);

class PlayerCard {
    constructor(player) {
        this.player = player;
    }

    create() {
        const cardElem = document.createElement("div");
        cardElem.classList.add("card");

        cardElem.innerHTML = `
            <img
                class="profile-picture"
                src="${this.player.profilePicturePath}"
                alt="${this.player.fullName}">

            <p class="first-name">${this.player.firstName}</p>
            <p class="last-name">${this.player.lastName}</p>

            <div class="stats-container">
                ${Object.entries(this.player.stats)
                    .map(
                        ([stat, value]) => `
                    <div class="stat">
                        <p class="description">${stat}</p>
                        <div class="separator"></div>
                        <p class="value">${String(value).padStart(2, "0")}</p>
                    </div>
                    `,
                    )
                    .join("\n")}
            </div>
        `;

        return cardElem;
    }
}

function main() {
    const players = [...Array(10)].map((_) => {
        const playerStats = new PlayerStats();
        playerStats.randomize();
        return new Player(
            "Lionel",
            "Messi",
            "../assets/images/players/messi.jpg",
            playerStats,
        );
    });

    players.forEach((player, i) => {
        const playerCard = new PlayerCard(player).create();

        if (i < players.length / 2) {
            LEFT_SIDEBAR.appendChild(playerCard);
        } else {
            RIGHT_SIDEBAR.appendChild(playerCard);
        }
    });

    console.log(players);
}

window.onload = (_) => {
    main();
};
