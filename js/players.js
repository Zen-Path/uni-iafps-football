import { PLAYERS_DATA } from "../data/players.js";

export class Player {
    constructor(firstName, lastName, profilePicturePath, stats = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;

        this.profilePicturePath = profilePicturePath;

        this.stats = stats ? stats : new PlayerStats();
        this.stats.randomize();

        this.fullCardElem = null;
    }

    createFullCard() {
        // TODO: Implement using proper elements, not innerHTML.
        const cardElem = document.createElement("div");
        cardElem.classList.add("full-card");
        cardElem.innerHTML = `
            <div class="profile-picture-container">
                <img
                class="profile-picture"
                src="${this.profilePicturePath}"
                alt="${this.fullName}"
                draggable="false">
            </div>

            <p class="first-name">${this.firstName}</p>
            <p class="last-name">${this.lastName}</p>

            <div class="stats-container">
                <div class="stats-descriptions">
                    ${Object.keys(this.stats)
                        .map(
                            (description) => `
                        <p class="description">${description}</p>
                    `,
                        )
                        .join("\n")}
                </div>

                <div class="stats-values">
                    ${Object.values(this.stats)
                        .map(
                            (value) => `
                        <p class="value">${String(value).padStart(2, 0)}</p>
                    `,
                        )
                        .join("\n")}
                </div>
            </div>
        `;

        this.fullCardElem = cardElem;
        return cardElem;
    }
}

export class PlayerStats {
    constructor(accuracy = null, reach = null, capture = null, block = null) {
        this.accuracy = accuracy;
        this.reach = reach;
        this.capture = capture;
        this.block = block;
    }

    randomize() {
        this.accuracy = Math.floor(Math.random() * 100);
        this.reach = Math.floor(Math.random() * 100);
        this.capture = Math.floor(Math.random() * 100);
        this.block = Math.floor(Math.random() * 100);
    }
}

const PLAYER_IMAGES_DIR = "../assets/images/players";

export const DEFAULT_PLAYERS = PLAYERS_DATA.map((player) => {
    return new Player(
        player.firstName,
        player.lastName,
        `${PLAYER_IMAGES_DIR}/${player.imageName}`,
    );
});
