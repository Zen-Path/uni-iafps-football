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
