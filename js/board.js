// jshint esversion: 9

const OFFSETS = [-1, 1];

class BaseShape {
    // prettier-ignore
    constructor({
        x,
        y,
        width           = 1,
        height          = 1,
        fillColor       = "#FFFFFF",
        strokeColor     = "#000000",
        strokeWeight    = 4,
        rotation        = 0,
        angleStart      = 0,
        angleEnd        = 0,
        scale           = 1.0,
    } = {}) {
        if (x === undefined || y === undefined) {
            throw new Error("x and y properties are required.");
        }

        this.x = x;
        this.y = y;

        this.width  = width;
        this.height = height;

        this.scale  = scale;

        this.fillColor      = fillColor;
        this.strokeColor    = strokeColor;
        this.strokeWeight   = strokeWeight;

        this.rotation       = rotation;
        this.angleStart     = angleStart;
        this.angleEnd       = angleEnd;
    }

    _draw() {
        // To be implemented in subclasses
        throw new Error("'_draw' must be implemented by a subclass.");
    }

    draw() {
        push(); // Save the current state

        translate(this.x, this.y);
        scale(this.scale);

        if (this.fillColor) {
            fill(this.fillColor);
        } else {
            noFill();
        }

        if (this.strokeColor) {
            stroke(this.strokeColor);
            strokeWeight(this.strokeWeight);
        } else {
            noStroke();
        }

        if (this.rotation !== 0) {
            rotate(this.rotation);
        }

        this._draw();

        pop(); // Restore the previous state
    }
}

class Team {
    constructor(name = "", fillColor = "") {
        this.name = name;
        this.fillColor = fillColor;
    }
}

class Player extends BaseShape {
    // Fill color will be overwritten by team color
    constructor({ team, ...rest } = {}) {
        super(rest);
        this.team = team;
        this.fillColor = this.team.fillColor;
    }

    _draw() {
        circle(0, 0, this.width);
    }

    initComponents() {
        self.init;
    }
}

class OuterCourt extends BaseShape {
    constructor({ innerCourt, ...rest } = {}) {
        super(rest);
        this.innerCourt = innerCourt;
    }

    _draw() {
        strokeWeight(0);
        rect(0, 0, this.width, this.height);
        strokeWeight(this.strokeWeight);
    }
}

class Gate extends BaseShape {
    _draw() {
        rect(0, 0, this.width, this.height);
    }
}

class Court extends BaseShape {
    constructor(rest = {}) {
        super(rest);

        this.markingsColor = "#fbfbfc";

        this.gates = this.initGates();
    }

    initGates() {
        let result = [];
        for (let i = 0; i < 2; i++) {
            result.push(
                new Gate({
                    x: ((i < 1 ? -1 : 1) * this.width) / 2 + 10 * (i < 1 ? -1 : 1),
                    y: 0,
                    width: 10,
                    height: 40,
                    fillColor: this.markingsColor,
                    strokeColor: this.markingsColor,
                }),
            );
        }
        return result;
    }

    _draw() {
        rect(0, 0, this.width, this.height);

        this.gates.forEach((gate) => gate.draw());

        this.drawHalfwayLine();
        this.drawCenterCircle();
        this.drawCenterSpot();

        this.drawGateMarkings();

        // this.drawInnerMarkings();
        this.drawCornerMarkings();
    }

    drawHalfwayLine() {
        line(0, -this.height / 2, 0, this.height / 2);
    }

    drawCenterCircle() {
        noFill();
        circle(this.x, this.y, 90);
    }

    drawCenterSpot() {
        circle(this.x, this.y, 10);
    }

    drawGateMarkings() {
        for (let i = 0; i < 2; i++) {
            rect(((i < 1 ? -1 : 1) * this.width) / 2 + (i < 1 ? -1 : 1) * -20, 0, 40, 80);
            rect(
                ((i < 1 ? -1 : 1) * this.width) / 2 + (i < 1 ? -1 : 1) * -40,
                0,
                80,
                160,
            );
        }
    }

    drawInnerMarkings() {
        const xOffset = 90;

        for (let i = 0; i < 2; i++) {
            line(
                (i < 1 ? 1 : -1) * xOffset,
                -this.height / 2,
                (i < 1 ? 1 : -1) * xOffset,
                this.height / 2,
            );
        }
    }

    drawCornerMarkings() {
        const width = 30;
        const height = 30;

        arc(-this.width / 2, -this.height / 2, width, height, 0, 90, PIE);
        arc(-this.width / 2, this.height / 2, width, height, 270, 0, PIE);

        arc(this.width / 2, -this.height / 2, width, height, 90, 180, PIE);
        arc(this.width / 2, this.height / 2, width, height, 180, 270, PIE);
    }
}

// Make the sides even so we have a "true" center
const CANVAS_WIDTH = 300 * 2;
const CANVAS_HEIGHT = 180 * 2;

let players = [];
let teams = [];
let court = null;
let courtPositions = [];

function setup() {
    const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent("sketch");

    rectMode(CENTER);
    ellipseMode(CENTER);
    angleMode(DEGREES);
    noLoop();

    teams = [new Team("USA", "blue"), new Team("Russia", "red")];

    const courtPositions = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 7, 0, 0],
        [1, 3, 5, 0, 6, 8, 10],
        [0, 4, 0, 0, 9, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];

    for (let i = 0; i < 10; i++) {
        let player = new Player({
            x: i <= 5 ? random(-200, -30) : random(30, 200),
            y: random(-100, 100),
            width: 30,
            height: 30,
            strokeWeight: 2,
            team: teams[i <= 5 ? 0 : 1],
        });
        players.push(player);
    }

    court = new Court({
        x: 0,
        y: 0,
        width: CANVAS_WIDTH - 100,
        height: CANVAS_HEIGHT - 80,
        fillColor: "#52a44f",
        strokeColor: "#fbfbfc",
        strokeWeight: 6,
    });
}

function draw() {
    background("#52a44f");
    translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

    court.draw();
    players.forEach((player) => player.draw());
}
