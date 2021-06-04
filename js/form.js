//This is the class responsible for the form
class Form {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement('h2');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement('h1');
        title.html("Race Car Game");
        title.position(displayWidth/2-40,0);

        this.input.position(displayWidth/2-30,450);
        
        this.button.position(displayWidth/2-30,480);
        
        this.button.mousePressed( () =>{
            //to hide input and button
            this.input.hide();
            this.button.hide();
            
            //storing the value in given in the input in a name variable
            player.name = this.input.value();

            //increase playerCount by 1
            //playerCount = playerCount+1
            playerCount += 1;
            player.index = playerCount
            //to update database using the player class functions
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hi " + player.name);
            this.greeting.position(displayWidth/2-40,200);
       
        })

    }
}


//h1 to h6 in decreasing order of size
//for headings : createElement
//for input : createInput
//for button : createButton
