export class Player {
    constructor(firstName, lastName, profilePicturePath, stats) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;

        this.profilePicturePath = profilePicturePath;
        this.stats = stats;
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
