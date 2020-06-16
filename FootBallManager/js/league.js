class League {
    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }

    get teams() {
        return this._teams;
    }

    constructor(number) {
        this._teams = [];
        this._number = number;
    }
    init(){
        Data.loadData(TEAMS);
        this.data = Data.teams;
        for (let i = 0; i < this.data.length; i++) {
            let team = new Team(this.data[i]._name);
            team.logo = this.data[i]._logo;
            team.matchsPlayed = this.data[i]._matchsPlayed;
            team.win = this.data[i]._win;
            team.lose = this.data[i]._lose;
            team.draw = this.data[i]._draw;
            team.goadScore = this.data[i]._goadScore;
            team.goalLose = this.data[i]._goalLose;
            this.addTeam(team);
        }
    }
    addTeam(team){
        if(this.teams.length >= this.number)return;
        this._teams.push(team);
    }

    getHtml(){
        let table = `<table border="0px solid black" cellspacing="0" class="table table-striped">
                        <tr>
                            <th>P0S</th>
                            <th colspan="2">TEAM</th>
                            <th>MATCHES</th>
                            <th>WIN</th>
                            <th>DRAW</th>
                            <th>LOSE</th>
                            <th>GS</th>
                            <th>GL</th>
                            <th>GD</th>
                            <th>POINTS</th>
                        </tr>`;
        for (let i = 0; i < this.teams.length; i++) {
            this.teams[i].pos = i+1;
            table += "<tr>"+this.teams[i].getHtml()+'</tr>';
        }
        table+=`</table>`;
        return table;
    }
}
