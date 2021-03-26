class Form
{
    constructor()
    {
        this. input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement("h1");
    }
    hide()
    {
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }
    display()
    {
var title=createElement("h2")
title.html("car racing game")
title.position(500,0)


this.input.position(500,350);


this.button.position(500,400)

this.button.mousePressed(()=>{
   this. input.hide()
    this.button.hide()

    player.name=this.input.value()
    playerCount+=1;
    player.index=playerCount;
    player.updatend();
    player.updatecount(playerCount);


    this.greeting.position(500,250);
    this.greeting.html("welcome  "+player.name)
});

   

}
    
}
