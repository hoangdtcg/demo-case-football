class Team {
    get logo() {
        return this._logo;
    }

    set logo(value) {
        this._logo = value;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get pos() {
        return this._pos;
    }

    set pos(value) {
        this._pos = value;
    }

    get matchsPlayed() {
        return this._matchsPlayed;
    }

    set matchsPlayed(value) {
        this._matchsPlayed = value;
    }

    get win() {
        return this._win;
    }

    set win(value) {
        this._win = value;
    }

    get draw() {
        return this._draw;
    }

    set draw(value) {
        this._draw = value;
    }

    get lose() {
        return this._lose;
    }

    set lose(value) {
        this._lose = value;
    }

    get goadScore() {
        return this._goadScore;
    }

    set goadScore(value) {
        this._goadScore = value;
    }

    get goalLose() {
        return this._goalLose;
    }

    set goalLose(value) {
        this._goalLose = value;
    }

    get goalDifference() {
        return this.goadScore - this.goalLose;
    }


    get points() {
        let point = this.win*3 + this.draw*1;
        return point;
    }

    constructor(name) {
        this._pos = 0;
        this._name = name;
        this._matchsPlayed = 0;
        this._win = 0;
        this._draw = 0;
        this._lose = 0;

        this._goadScore = 0;
        this._goalLose = 0;

        this._goalDifference = 0;
        this._points = 0;
        this._logo = "images/icon_team.png";
    }
    getHtml(){
        let html = `<td>${this.pos}</td>
                    <td id="logo" style="overflow: hidden"><img style="width: 50px;height: auto" src="${this.logo}"></td>
                    <td class="align-left">${this.name}</td>
                    <td>${this.matchsPlayed}</td>
                    <td>${this.win}</td>
                    <td>${this.draw}</td>
                    <td>${this.lose}</td>
                    <td>${this.goadScore}</td>
                    <td>${this.goalLose}</td>
                    <td>${this.goalDifference}</td>
                    <td>${this.points}</td>`;
        return html;
    }
}
