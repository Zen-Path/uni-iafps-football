// TEAMS

// Source: https://footballdatabase.com/ranking/world/1

var teams = [...document.body.querySelectorAll(".club.text-left")].map((teamDiv) => {
    return {
        name: teamDiv.querySelector(".limittext").textContent,
        logo: `https://footballdatabase.com${
            teamDiv
                .querySelector(".logo-md")
                .style.backgroundImage.match(/url\("(.*)"\)/)[1]
        }`,
    };
});

console.log(
    teams
        .map((team) => {
            return `new Team("${team.name}", "${team.name
                .toLowerCase()
                .replaceAll(" ", "-")}.png")`;
        })
        .join(",\n"),
);

console.log(
    teams
        .map((team) => {
            return `${team.logo}\n\tout=${team.name
                .toLowerCase()
                .replaceAll(" ", "-")}.png`;
        })
        .join("\n"),
);

// PLAYERS

// Source: https://www.footballcritic.com/players
var players = [...document.body.querySelector(".ais-hits").children].map((playerDiv) => {
    return {
        photo: playerDiv.querySelector(".player img").src,
        name: playerDiv.querySelector(".name a").textContent,
    };
});

var playerImages = players
    .map(
        (player) =>
            `${player.photo}\n\tout=${player.name
                .trim()
                .toLowerCase()
                .replace(" ", "-")}.png`,
    )
    .join("\n");

var playerNames = players
    .map(
        (player) =>
            `new Player("${player.name.split(" ")[0]}", "${player.name
                .split(" ")
                .slice(1)}", "../images/players/${player.name
                .trim()
                .toLowerCase()
                .replace(" ", "-")}.png"),`,
    )
    .join("\n");

console.log(JSON.stringify(players, null, 4));
console.log(playerImages);
console.log(playerNames);
