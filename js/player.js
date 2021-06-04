//This is the class responsible for the information about players[]

class Player{
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
    }

    //read part of the database
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount= data.val();
        })
    }
    //write part of the database
    updateCount(count){
        //'/' to refer to the entire database
        database.ref('/').update({
            playerCount: count
        })
    }

    //to update names of the player in database
    update(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name: this.name,
            distance : this.distance
        })
    }
//static means it is related to class and not onj in it
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }

   
}