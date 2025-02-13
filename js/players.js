export class Player {
    constructor(firstName, lastName, profilePicturePath, stats = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;

        this.profilePicturePath = profilePicturePath;

        this.stats = stats ? stats : new PlayerStats();
        this.stats.randomize();
    }
}

export class PlayerStats {
    constructor(accuracy = null, reach = null, capture = null, block = null) {
        this.accuracy = accuracy;
        this.reach = reach;
        this.capture = capture;
        this.block = block;
    }

    randomize() {
        this.accuracy = Math.floor(Math.random() * 100);
        this.reach = Math.floor(Math.random() * 100);
        this.capture = Math.floor(Math.random() * 100);
        this.block = Math.floor(Math.random() * 100);
    }
}

export const DEFAULT_PLAYERS = [
    new Player("Lionel", "Messi", "../assets/images/players/lionel-messi.png"),
    new Player("Cristiano", "Ronaldo", "../assets/images/players/cristiano-ronaldo.png"),
    new Player("Mohamed", "Salah", "../assets/images/players/mohamed-salah.png"),
    new Player("Omar", "Marmoush", "../assets/images/players/omar-marmoush.png"),
    new Player("Jamal", "Musiala", "../assets/images/players/jamal-musiala.png"),
    new Player("Florian", "Wirtz", "../assets/images/players/florian-wirtz.png"),
    new Player("Bukayo", "Saka", "../assets/images/players/bukayo-saka.png"),
    new Player("Vinícius", "Júnior", "../assets/images/players/vinícius-júnior.png"),
    new Player("Alexander", "Isak", "../assets/images/players/alexander-isak.png"),
    new Player("Joshua", "Kimmich", "../assets/images/players/joshua-kimmich.png"),
    new Player("Dayot", "Upamecano", "../assets/images/players/dayot-upamecano.png"),
    new Player("Achraf", "Hakimi", "../assets/images/players/achraf-hakimi.png"),
    new Player("Jude", "Bellingham", "../assets/images/players/jude-bellingham.png"),
    new Player("Kim", "Minjae", "../assets/images/players/kim-minjae.png"),
    new Player("Ousmane", "Dembélé", "../assets/images/players/ousmane-dembélé.png"),
    new Player("Kylian", "Mbappé", "../assets/images/players/kylian-mbappé.png"),
    new Player(
        "Robert",
        "Lewandowski",
        "../assets/images/players/robert-lewandowski.png",
    ),
    new Player("Cole", "Palmer", "../assets/images/players/cole-palmer.png"),
    new Player("Harry", "Kane", "../assets/images/players/harry-kane.png"),
    new Player("Antoine", "Griezmann", "../assets/images/players/antoine-griezmann.png"),
    new Player("Michael", "Olise", "../assets/images/players/michael-olise.png"),
    new Player("Bryan", "Mbeumo", "../assets/images/players/bryan-mbeumo.png"),
    new Player(
        "Trent",
        "Alexander-Arnold",
        "../assets/images/players/trent-alexander-arnold.png",
    ),
    new Player("Toni", "Kroos", "../assets/images/players/toni-kroos.png"),
    new Player("Matheus", "Cunha", "../assets/images/players/matheus-cunha.png"),
    new Player("Jordan", "Pickford", "../assets/images/players/jordan-pickford.png"),
    new Player("Julián", "Álvarez", "../assets/images/players/julián-álvarez.png"),
    new Player("Íñigo", "Martínez", "../assets/images/players/íñigo-martínez.png"),
    new Player("Ayoze", "Pérez", "../assets/images/players/ayoze-pérez.png"),
    new Player("Bradley", "Barcola", "../assets/images/players/bradley-barcola.png"),
    new Player("Amir", "Rrahmani", "../assets/images/players/amir-rrahmani.png"),
    new Player(
        "Vanja",
        "Milinković-Savić",
        "../assets/images/players/vanja-milinković-savić.png",
    ),
    new Player("Tim", "Kleindienst", "../assets/images/players/tim-kleindienst.png"),
    new Player("Angelo", "Stiller", "../assets/images/players/angelo-stiller.png"),
    new Player("Yann", "Sommer", "../assets/images/players/yann-sommer.png"),
    new Player("Declan", "Rice", "../assets/images/players/declan-rice.png"),
    new Player("William", "Saliba", "../assets/images/players/william-saliba.png"),
    new Player("Exequiel", "Palacios", "../assets/images/players/exequiel-palacios.png"),
    new Player("Erling", "Haaland", "../assets/images/players/erling-haaland.png"),
    new Player("Phil", "Foden", "../assets/images/players/phil-foden.png"),
    new Player("Daniel", "Vivian", "../assets/images/players/daniel-vivian.png"),
    new Player("Maxence", "Lacroix", "../assets/images/players/maxence-lacroix.png"),
    new Player("Mateo", "Retegui", "../assets/images/players/mateo-retegui.png"),
    new Player("Cody", "Gakpo", "../assets/images/players/cody-gakpo.png"),
    new Player("Alphonso", "Davies", "../assets/images/players/alphonso-davies.png"),
    new Player("Ademola", "Lookman", "../assets/images/players/ademola-lookman.png"),
];
