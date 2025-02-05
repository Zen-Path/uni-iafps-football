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

