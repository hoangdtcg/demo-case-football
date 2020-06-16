const NUMBER_TEAMS = 20;
const USER = "users";
const TEAMS = "teams";
class Data {
    static users =[];
    static teams=[];
    static USERS = [];
    static TEAMS = [];

    static saveData(data,name){
        localStorage.setItem(name,JSON.stringify(data));
    }
    static loadData(name){
        if(!localStorage.hasOwnProperty(name))return;
        let data = JSON.parse(localStorage.getItem(name));
        switch (name) {
            case USER:
                for (let i = 0; i < data.length; i++) {
                    this.users.push(data[i]);
                }
                break;
            case TEAMS:
                for (let i = 0; i < data.length; i++) {
                    this.teams.push(data[i]);
                }
                break;
        }
    }
}
