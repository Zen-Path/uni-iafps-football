class Team {
    COLORS = {
        RED: "#d9042b",
        BLUE: "#03658c",
    };

    LOGO_DIR = "../assets/images/teams/";

    // Note: provide either logo name OR path.
    constructor(name, logoName = null, logoPath = null, side = null, color = null) {
        this.name = name;

        this.logoName = logoName;
        this.logoPath = logoPath ? logoPath : this.LOGO_DIR + logoName;

        this.side = side;
        this.color = color ? color : this.COLORS[this.side % 2];

        this.successRate = 50.0;
    }

    calculateSuccessRate() {
        const successRate = Math.random() * 100;
        this.successRate = successRate;
        return successRate;
    }
}

// Source: https://footballdatabase.com/ranking/world/1
export const DEFAULT_TEAMS = [
    new Team("Liverpool FC", "liverpool-fc.png"),
    new Team("Inter Milan", "inter-milan.png"),
    new Team("Arsenal", "arsenal.png"),
    new Team("Real Madrid", "real-madrid.png"),
    new Team("Bayer Leverkusen", "bayer-leverkusen.png"),
    new Team("Paris Saint-Germain", "paris-saint-germain.png"),
    new Team("Barcelona", "barcelona.png"),
    new Team("Bayern München", "bayern-münchen.png"),
    new Team("Atlético Madrid", "atlético-madrid.png"),
    new Team("Atalanta", "atalanta.png"),
    new Team("Manchester City", "manchester-city.png"),
    new Team("SSC Napoli", "ssc-napoli.png"),
    new Team("PSV Eindhoven", "psv-eindhoven.png"),
    new Team("Sporting", "sporting.png"),
    new Team("Juventus", "juventus.png"),
    new Team("Athletic Bilbao", "athletic-bilbao.png"),
    new Team("Chelsea FC", "chelsea-fc.png"),
    new Team("Benfica", "benfica.png"),
    new Team("Lille", "lille.png"),
    new Team("AC Milan", "ac-milan.png"),
    new Team("Newcastle United", "newcastle-united.png"),
    new Team("Bologna", "bologna.png"),
    new Team("Borussia Dortmund", "borussia-dortmund.png"),
    new Team("Feyenoord", "feyenoord.png"),
    new Team("Lazio", "lazio.png"),
    new Team("Villarreal", "villarreal.png"),
    new Team("FC Porto", "fc-porto.png"),
    new Team("Galatasaray", "galatasaray.png"),
    new Team("Eintracht Frankfurt", "eintracht-frankfurt.png"),
    new Team("Botafogo FR", "botafogo-fr.png"),
    new Team("Al Hilal", "al-hilal.png"),
    new Team("Aston Villa", "aston-villa.png"),
    new Team("Fiorentina", "fiorentina.png"),
    new Team("AS Monaco", "as-monaco.png"),
    new Team("Palmeiras", "palmeiras.png"),
    new Team("Fenerbahçe", "fenerbahçe.png"),
    new Team("AS Roma", "as-roma.png"),
    new Team("VfB Stuttgart", "vfb-stuttgart.png"),
    new Team("Celtic", "celtic.png"),
    new Team("Slavia Prague", "slavia-prague.png"),
    new Team("Corinthians", "corinthians.png"),
    new Team("Ajax Amsterdam", "ajax-amsterdam.png"),
    new Team("Fulham", "fulham.png"),
    new Team("Marseille", "marseille.png"),
    new Team("Mainz 05", "mainz-05.png"),
    new Team("FK Red Star Belgrade", "fk-red-star-belgrade.png"),
];
