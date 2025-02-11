import { getUniqueRandomElements } from "./utils.js";
import { DEFAULT_PLAYERS } from "./player.js";
import { DEFAULT_TEAMS } from "./team.js";

const SIDEBAR_LEFT = document.body.querySelector("#sidebar-left");
const SIDEBAR_RIGHT = document.body.querySelector("#sidebar-right");

const BANNER_CONTAINER = document.body.querySelector("#banner-container");

class PlayerCard {
    constructor(player) {
        this.player = player;
    }

    create() {
        const cardElem = document.createElement("div");
        cardElem.classList.add("full-card");
        console.log(this.player.stat);
        cardElem.innerHTML = `
            <div class="profile-picture-container">
                <img
                class="profile-picture"
                src="${this.player.profilePicturePath}"
                alt="${this.player.fullName}"
                draggable="false">
            </div>

            <p class="first-name">${this.player.firstName}</p>
            <p class="last-name">${this.player.lastName}</p>

            <div class="stats-container">
                <div class="stats-descriptions">
                    ${Object.keys(this.player.stats)
                        .map(
                            (description) => `
                        <p class="description">${description}</p>
                    `,
                        )
                        .join("\n")}
                </div>

                <div class="stats-values">
                    ${Object.values(this.player.stats)
                        .map(
                            (value) => `
                        <p class="value">${String(value).padStart(2, 0)}</p>
                    `,
                        )
                        .join("\n")}
                </div>
            </div>
        `;

        return cardElem;
    }
}

class TeamBanner {
    TEAM_STATISTIC_ELEM_ID = "team-statistic";

    constructor(team1, team2) {
        this.team1 = team1;
        this.team2 = team2;
    }

    create() {
        const bannerElem = document.createElement("div");
        bannerElem.classList.add("banner");

        bannerElem.innerHTML = `
            <div class="badge left">
                <img
                    class="logo"
                    src="${this.team1.logoPath}"
                    alt="${this.team1.name} Logo"
                    draggable="false" >
                <p>${this.team1.name}</p>
            </div>
            <div class="ribbon">
                <img
                    class="icon"
                    src="../assets/icons/icon_gold-ball.png"
                    alt="Gold ball"
                    draggable="false">
                <p id="${this.TEAM_STATISTIC_ELEM_ID}">${this._composeSuccessRate(
                    this.team1.successRate,
                    this.team2.successRate,
                )}</p>
            </div>
            <div class="badge right">
                <p>${this.team2.name}</p>
                <img
                    class="logo"
                    src="${this.team2.logoPath}"
                    alt="${this.team2.name} Logo"
                    draggable="false">
            </div>
        `;
        return bannerElem;
    }

    updateSuccessRate() {
        this.team1.calculateSuccessRate();

        // TODO: temp, change when implementing actual calculation
        this.team2.successRate = 100 - this.team1.successRate;
        // this.team2.calculateSuccessRate();

        document.body.querySelector("#" + this.TEAM_STATISTIC_ELEM_ID).textContent =
            this._composeSuccessRate(this.team1.successRate, this.team2.successRate);
    }

    _formatSuccessRate(successRate) {
        return String(Math.round(successRate)).padStart(2, 0);
    }

    _composeSuccessRate(team1SuccessRate, team2SuccessRate) {
        return `${this._formatSuccessRate(team1SuccessRate)}-${this._formatSuccessRate(
            team2SuccessRate,
        )}`;
    }
}

function main() {
    const teams = getUniqueRandomElements(DEFAULT_TEAMS, 2);
    const teamBanner = new TeamBanner(teams[0], teams[1]);
    const teamBannerElem = teamBanner.create();
    BANNER_CONTAINER.appendChild(teamBannerElem);

    const players = getUniqueRandomElements(DEFAULT_PLAYERS, 10);

    players.forEach((player, i) => {
        const playerCard = new PlayerCard(player);
        const playerCardElem = playerCard.create();

        playerCardElem.addEventListener("click", () => {
            teamBanner.updateSuccessRate();
        });

        if (i < players.length / 2) {
            SIDEBAR_LEFT.appendChild(playerCardElem);
        } else {
            SIDEBAR_RIGHT.appendChild(playerCardElem);
        }
    });

    console.log(players);
}

window.onload = (_) => {
    main();
};
