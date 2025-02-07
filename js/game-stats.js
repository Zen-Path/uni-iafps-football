import { DEFAULT_PLAYERS, Player, PlayerStats } from "./player.js";
import { getUniqueRandomElements } from "./utils.js";
import { DEFAULT_TEAMS } from "./team.js";

const LEFT_SIDEBAR = document.body.querySelector(
    ".sidebar-container.left .player-card-sidebar",
);
const RIGHT_SIDEBAR = document.body.querySelector(
    ".sidebar-container.right .player-card-sidebar",
);

const BANNER_CONTAINER = document.body.querySelector("#banner-container");

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
                    alt="${this.team1.name} Logo" />
                <p>${this.team1.name}</p>
            </div>
            <div class="ribbon">
                <img
                    class="icon"
                    src="../assets/icons/icon_gold-ball.png"
                    alt="Gold ball" />
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
                    alt="${this.team2.name} Logo" />
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
        return `${this._formatSuccessRate(team1SuccessRate)}:${this._formatSuccessRate(
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
            LEFT_SIDEBAR.appendChild(playerCardElem);
        } else {
            RIGHT_SIDEBAR.appendChild(playerCardElem);
        }
    });

    console.log(players);
}

window.onload = (_) => {
    main();
};
