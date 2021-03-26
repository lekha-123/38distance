class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getplayercount() {
        var playercountdata = database.ref("/playerCount");
        playercountdata.on("value",(data)=> {
            playerCount = data.val();
        });
    }
    updatecount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
    updatend()
    {
        var datand=("players/player")+this.index;
        database.ref(datand).set({
            name:this.name,
            distance:this.distance
        });
    }

    //static function called by class itself instead of objects 
    static getplayerdetails()
    {
        var allplayerinfo=database.ref("/players");
        allplayerinfo.on("value",(data)=>{
            allplayers=data.val();
        })
    }
}