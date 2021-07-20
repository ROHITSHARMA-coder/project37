class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide();
background("yellow");
fill("black");
textSize(30);
text("result of the quiz",340,50)
Contestant.getPlayerInfo();
if(allContestants!==undefined){
  var da=230
  fill("blue")
  textSize(20)
  text("Note: player who answered correct are hightlighted in green",130,230)
  for(var plr in  allContestants ){
var ca="2"
if(ca===allContestants[plr].answer)
fill("green")
else
fill("red")
da+=30
textSize(20)
text(allContestants[plr].name+": "+allContestants[plr].answer,250,da)
  }
}

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
