class Game {
    constructor() {}
    getstate() {
        var statedata = database.ref("gameState");
        statedata.on("value", function(data) {
            gameState = data.val();
        })
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playercountdata = await database.ref("playerCount").once("value");
            if (playercountdata.exists()) {
                playerCount = playercountdata.val();
                player.getplayercount()


            }
            form = new Form();
            form.display();
        }
    }
    play() {
        form.hide();
        textSize(30);
        text("game start", 120, 350);
        Player.getplayerdetails();

        if(allplayers!==undefined)
        {var display_position=130;
            for(var plr in allplayers){
                if(plr=== "player"+player.index)
                {
                fill ("red");
                }
                else{
                    fill ("black");
                }
                display_position+=30;
                textSize(25);
                text(allplayers[plr].name +":"+allplayers[plr].distance,120,display_position)
            }

    }
        if (keyIsDown(UP_ARROW)&& player.index!==null) {
            player.distance += 50;
            player.updatend();
        }
       

    }

}