import { getUniqueRandomElements } from "./utils.js";
import { Team, TeamBanner, DEFAULT_TEAMS } from "./teams.js";
import { DEFAULT_PLAYERS } from "./players.js";

const BANNER_CONTAINER = document.getElementById(TeamBanner.BANNER_CONTAINER_ID);
const SIDEBAR_CONTAINER_LEFT = document.body.querySelector(".sidebar-container.left");
const SIDEBAR_CONTAINER_RIGHT = document.body.querySelector(".sidebar-container.right");

function generatePlayers(teams, countA, countB, teamBanner) {
    const players = getUniqueRandomElements(DEFAULT_PLAYERS, countA + countB);
    teams[0].players = players.slice(0, countA);
    teams[1].players = players.slice(countA);

    const leftSidebarElem = teams[0].createSidebar();
    while (SIDEBAR_CONTAINER_LEFT.children[0]) {
        SIDEBAR_CONTAINER_LEFT.removeChild(SIDEBAR_CONTAINER_LEFT.children[0]);
    }
    SIDEBAR_CONTAINER_LEFT.appendChild(leftSidebarElem);

    const rightSidebarElem = teams[1].createSidebar();
    while (SIDEBAR_CONTAINER_RIGHT.children[0]) {
        SIDEBAR_CONTAINER_RIGHT.removeChild(SIDEBAR_CONTAINER_RIGHT.children[0]);
    }
    SIDEBAR_CONTAINER_RIGHT.appendChild(rightSidebarElem);

    players.forEach((player) => {
        console.log(player.fullCardElem);
        player.fullCardElem.addEventListener("click", () => {
            teamBanner.updateSuccessRate();
        });
    });
}

function main() {
    const teams = getUniqueRandomElements(DEFAULT_TEAMS, 2);
    teams[0].side = Team.SIDE.LEFT;
    teams[1].side = Team.SIDE.RIGHT;

    const teamBanner = new TeamBanner(teams);
    const teamBannerElem = teamBanner.create();
    BANNER_CONTAINER.appendChild(teamBannerElem);

    generatePlayers(teams, 5, 5, teamBanner);

    document.getElementById("teamForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const teamData = {
            teamA: {
                playerCount: parseInt(formData.get("teamA_player_count")),
                order: formData.get("teamA_order"),
            },
            teamB: {
                playerCount: parseInt(formData.get("teamB_player_count")),
                order: formData.get("teamB_order"),
            },
        };

        generatePlayers(
            teams,
            teamData.teamA.playerCount,
            teamData.teamB.playerCount,
            teamBanner,
        );
    });
}

window.onload = () => {
    main();
};
