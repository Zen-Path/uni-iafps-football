// TEAMS

// Source: https://footballdatabase.com/ranking/world/1

var teams = [...document.body.querySelectorAll(".club.text-left")]
    .map((teamElem) => {
        const name = teamElem.querySelector(".limittext").textContent;

        return {
            name: name,
            logoUrl: `https://footballdatabase.com${
                teamElem
                    .querySelector(".logo-md")
                    .style.backgroundImage.match(/url\("(.*)"\)/)[1]
            }`,
            fileName: `${name.toLowerCase().replaceAll(" ", "-")}.png`,
        };
    })
    .slice(0, 15);

var teamsFmt = JSON.stringify(teams, null, 4);

console.log(
    teams
        .map((team) => {
            return `${team.logoUrl}\n\tout=${team.fileName}`;
        })
        .join("\n"),
);

console.log(teamsFmt);
copy(teamsFmt);

// PLAYERS

// Source: https://www.footballcritic.com/players
var players = [...document.body.querySelector(".ais-hits").children]
    .map((playerDiv) => {
        const name = playerDiv.querySelector(".name a").textContent;
        if (name.split(" ").length !== 2) {
            return null;
        }
        return {
            photo: playerDiv.querySelector(".player img").src,
            name: name,
        };
    })
    .filter(Boolean);

var playerImages = players
    .map(
        (player) =>
            `${player.photo}\n\tout=${player.name
                .trim()
                .toLowerCase()
                .replaceAll(" ", "-")}.png`,
    )
    .join("\n");

var playerNames = players
    .map(
        (player) =>
            `new Player("${player.name.split(" ")[0]}", "${player.name
                .split(" ")
                .slice(1)}", "../assets/images/players/${player.name
                .trim()
                .toLowerCase()
                .replaceAll(" ", "-")}.png"),`,
    )
    .join("\n");

console.log(JSON.stringify(players, null, 4));
console.log(playerImages);
console.log(playerNames);
