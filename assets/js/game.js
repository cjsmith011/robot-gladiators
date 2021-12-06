var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
  //repeat and execute as long as the enemy-robot is alive
  while(playerHealth > 0 && enemyHealth > 0) {
  //ask player if they want to fight or skip
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
      break;
    }
   }
  
   enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
    
  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    //award money to player for win
    playerMoney= playerMoney + 20;
    //leave while ()loop since enemy is dead
    break;
  } 
    else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  //remove player health for the fight
  playerHealth = playerHealth -enemyAttack;
  console.log(
    enemyName + " attacked" + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );
  //check player health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    //leave while() if player is dead
    break;
  } 
    else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  }
};
for(var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName)
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  else {
    window.alert("You have lost your robot in battle!  Boo!  Game over!");
    break;
  }
  }
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
}
//fight(enemyRobot)