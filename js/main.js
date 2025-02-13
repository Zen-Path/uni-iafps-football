import { Team, TeamBanner, DEFAULT_TEAMS } from "./teams.js";

import { getUniqueRandomElements } from "./utils.js";

const BANNER_CONTAINER = document.body.querySelector("#banner-container");

function main() {
    const teams = getUniqueRandomElements(DEFAULT_TEAMS, 2);
    teams[0].side = Team.SIDE.LEFT;
    teams[1].side = Team.SIDE.RIGHT;

    const teamBanner = new TeamBanner(teams);
    const teamBannerElem = teamBanner.create();

    console.log(teams, teamBannerElem, "yo");
    BANNER_CONTAINER.appendChild(teamBannerElem);

    // console.log(BASIC_TEAMS)
}

window.onload = () => {
    main();
};
