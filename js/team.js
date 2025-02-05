class TeamLogo {
    DEFAULT_LOGO_DIR = "../assets/images/teams/";

    constructor(fileName, src = null) {
        this.path = this.DEFAULT_LOGO_DIR + fileName;
        this.src = src;
    }
}

class Team {
    COLORS = {
        RED: "#d9042b",
        BLUE: "#03658c",
    };

    constructor(name, logo, color = null) {
        this.name = name;
        this.logo = logo;
        this.color = color;
    }
}

export const DEFAULT_TEAMS = [
    new Team(
        "Liverpool FC",
        new TeamLogo(
            "liverpool-fc.png",
            "https://footballdatabase.com/logos/club/80px/313.png",
        ),
    ),
    new Team(
        "Inter Milan",
        new TeamLogo(
            "inter-milan.png",
            "https://footballdatabase.com/logos/club/80px/10.png",
        ),
    ),
    new Team(
        "Arsenal",
        new TeamLogo("arsenal.png", "https://footballdatabase.com/logos/club/80px/7.png"),
    ),
    new Team(
        "Real Madrid",
        new TeamLogo(
            "real-madrid.png",
            "https://footballdatabase.com/logos/club/80px/2.png",
        ),
    ),
    new Team(
        "Bayer Leverkusen",
        new TeamLogo(
            "bayer-leverkusen.png",
            "https://footballdatabase.com/logos/club/80px/35.png",
        ),
    ),
    new Team(
        "Paris Saint-Germain",
        new TeamLogo(
            "paris-saint-germain.png",
            "https://footballdatabase.com/logos/club/80px/39.png",
        ),
    ),
    new Team(
        "Barcelona",
        new TeamLogo(
            "barcelona.png",
            "https://footballdatabase.com/logos/club/80px/1.png",
        ),
    ),
    new Team(
        "Bayern München",
        new TeamLogo(
            "bayern-münchen.png",
            "https://footballdatabase.com/logos/club/80px/16.png",
        ),
    ),
    new Team(
        "Atlético Madrid",
        new TeamLogo(
            "atlético-madrid.png",
            "https://footballdatabase.com/logos/club/80px/72.png",
        ),
    ),
    new Team(
        "Atalanta",
        new TeamLogo(
            "atalanta.png",
            "https://footballdatabase.com/logos/club/80px/1322.png",
        ),
    ),
    new Team(
        "Manchester City",
        new TeamLogo(
            "manchester-city.png",
            "https://footballdatabase.com/logos/club/80px/11.png",
        ),
    ),
    new Team(
        "SSC Napoli",
        new TeamLogo(
            "ssc-napoli.png",
            "https://footballdatabase.com/logos/club/80px/44.png",
        ),
    ),
    new Team(
        "PSV Eindhoven",
        new TeamLogo(
            "psv-eindhoven.png",
            "https://footballdatabase.com/logos/club/80px/14.png",
        ),
    ),
    new Team(
        "Sporting",
        new TeamLogo(
            "sporting.png",
            "https://footballdatabase.com/logos/club/80px/53.png",
        ),
    ),
    new Team(
        "Juventus",
        new TeamLogo(
            "juventus.png",
            "https://footballdatabase.com/logos/club/80px/68.png",
        ),
    ),
    new Team(
        "Athletic Bilbao",
        new TeamLogo(
            "athletic-bilbao.png",
            "https://footballdatabase.com/logos/club/80px/168.png",
        ),
    ),
    new Team(
        "Chelsea FC",
        new TeamLogo(
            "chelsea-fc.png",
            "https://footballdatabase.com/logos/club/80px/43.png",
        ),
    ),
    new Team(
        "Benfica",
        new TeamLogo(
            "benfica.png",
            "https://footballdatabase.com/logos/club/80px/58.png",
        ),
    ),
    new Team(
        "Lille",
        new TeamLogo("lille.png", "https://footballdatabase.com/logos/club/80px/18.png"),
    ),
    new Team(
        "AC Milan",
        new TeamLogo(
            "ac-milan.png",
            "https://footballdatabase.com/logos/club/80px/23.png",
        ),
    ),
    new Team(
        "Newcastle United",
        new TeamLogo(
            "newcastle-united.png",
            "https://footballdatabase.com/logos/club/80px/183.png",
        ),
    ),
    new Team(
        "Bologna",
        new TeamLogo(
            "bologna.png",
            "https://footballdatabase.com/logos/club/80px/257.png",
        ),
    ),
    new Team(
        "Borussia Dortmund",
        new TeamLogo(
            "borussia-dortmund.png",
            "https://footballdatabase.com/logos/club/80px/4.png",
        ),
    ),
    new Team(
        "Feyenoord",
        new TeamLogo(
            "feyenoord.png",
            "https://footballdatabase.com/logos/club/80px/338.png",
        ),
    ),
    new Team(
        "Lazio",
        new TeamLogo("lazio.png", "https://footballdatabase.com/logos/club/80px/63.png"),
    ),
    new Team(
        "Villarreal",
        new TeamLogo(
            "villarreal.png",
            "https://footballdatabase.com/logos/club/80px/15.png",
        ),
    ),
    new Team(
        "FC Porto",
        new TeamLogo(
            "fc-porto.png",
            "https://footballdatabase.com/logos/club/80px/5.png",
        ),
    ),
    new Team(
        "Galatasaray",
        new TeamLogo(
            "galatasaray.png",
            "https://footballdatabase.com/logos/club/80px/249.png",
        ),
    ),
    new Team(
        "Eintracht Frankfurt",
        new TeamLogo(
            "eintracht-frankfurt.png",
            "https://footballdatabase.com/logos/club/80px/230.png",
        ),
    ),
    new Team(
        "Botafogo FR",
        new TeamLogo(
            "botafogo-fr.png",
            "https://footballdatabase.com/logos/club/80px/60.png",
        ),
    ),
    new Team(
        "Al Hilal",
        new TeamLogo(
            "al-hilal.png",
            "https://footballdatabase.com/logos/club/80px/858.png",
        ),
    ),
    new Team(
        "Aston Villa",
        new TeamLogo(
            "aston-villa.png",
            "https://footballdatabase.com/logos/club/80px/392.png",
        ),
    ),
    new Team(
        "Fiorentina",
        new TeamLogo(
            "fiorentina.png",
            "https://footballdatabase.com/logos/club/80px/164.png",
        ),
    ),
    new Team(
        "AS Monaco",
        new TeamLogo(
            "as-monaco.png",
            "https://footballdatabase.com/logos/club/80px/295.png",
        ),
    ),
    new Team(
        "Palmeiras",
        new TeamLogo(
            "palmeiras.png",
            "https://footballdatabase.com/logos/club/80px/305.png",
        ),
    ),
    new Team(
        "Fenerbahçe",
        new TeamLogo(
            "fenerbahçe.png",
            "https://footballdatabase.com/logos/club/80px/59.png",
        ),
    ),
    new Team(
        "AS Roma",
        new TeamLogo(
            "as-roma.png",
            "https://footballdatabase.com/logos/club/80px/31.png",
        ),
    ),
    new Team(
        "VfB Stuttgart",
        new TeamLogo(
            "vfb-stuttgart.png",
            "https://footballdatabase.com/logos/club/80px/344.png",
        ),
    ),
    new Team(
        "Celtic",
        new TeamLogo("celtic.png", "https://footballdatabase.com/logos/club/80px/25.png"),
    ),
    new Team(
        "Slavia Prague",
        new TeamLogo(
            "slavia-prague.png",
            "https://footballdatabase.com/logos/club/80px/340.png",
        ),
    ),
    new Team(
        "Corinthians",
        new TeamLogo(
            "corinthians.png",
            "https://footballdatabase.com/logos/club/80px/32.png",
        ),
    ),
    new Team(
        "Ajax Amsterdam",
        new TeamLogo(
            "ajax-amsterdam.png",
            "https://footballdatabase.com/logos/club/80px/37.png",
        ),
    ),
    new Team(
        "Fulham",
        new TeamLogo(
            "fulham.png",
            "https://footballdatabase.com/logos/club/80px/303.png",
        ),
    ),
    new Team(
        "Marseille",
        new TeamLogo(
            "marseille.png",
            "https://footballdatabase.com/logos/club/80px/19.png",
        ),
    ),
    new Team(
        "Mainz 05",
        new TeamLogo(
            "mainz-05.png",
            "https://footballdatabase.com/logos/club/80px/85.png",
        ),
    ),
    new Team(
        "FK Red Star Belgrade",
        new TeamLogo(
            "fk-red-star-belgrade.png",
            "https://footballdatabase.com/logos/club/80px/565.png",
        ),
    ),
];

console.log(DEFAULT_TEAMS);
