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
        const nameParts = name.split(" ");

        // Avoid complicated names.
        if (name.split(" ").length !== 2) {
            return null;
        }

        const firstName = nameParts[0];
        const lastName = nameParts[1];

        return {
            firstName,
            lastName,
            imageUrl: playerDiv.querySelector(".player img").src,
            imageName: `${[firstName, lastName].join("-").replaceAll("'", "-").trim().toLowerCase()}.png`,
        };
    })
    .filter(Boolean);

var playersFmt = JSON.stringify(players, null, 4);

console.log(
    players.map((player) => `${player.imageUrl}\n\tout=${player.imageName}`).join("\n"),
);

console.log(playersFmt);
copy(playersFmt);
