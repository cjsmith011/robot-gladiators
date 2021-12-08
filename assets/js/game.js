var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


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
var startGame = function() {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

 for(var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    
    //can't shop if there are no enemies
    if (playerHealth > 0 && i < enemyNames.length - 1) {
      //see if player wants to shop before next round
      var storeConfirm = window.confirm("The fight is over, visit our store before the next round?");
      //if yes, go to the shop
      if (storeConfirm) {
      shop();
    }
  }
  }
  else {
    window.alert("You have lost your robot in battle!  Boo!  Game over!");
    break;
  }
}
endGame();
};
//start game when the page loads
  var endGame = function() {
    //if player is alive, player wins message
    if (playerHealth > 0) {
      window.alert("Congrats, you survived the game!  You now have a score of " + playerMoney + ".");
    }
    else {
      window.alert("Your robot died, sorry about your luck!");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
      startGame();
    }
    else {
      window.alert("Thank you for playing Robot Gladiators! Come back again!");
    }
  };
  //shop function
  var shop = function() {
    //ask player for their choice
    var shopOptionPrompt = window.prompt (
      "Would you like to refill your health, upgrade your attack or leave the store?  Please enter REFILL, UPGRADE OR LEAVE to choose");
        switch (shopOptionPrompt) {
          case "REFILL": //new case
          case "refill":
            if (playerMoney >= 7) {
            window.alert("Refilling your health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
              window.alert("You gots no monies");
            }
            break;
          case "UPGRADE":
          case "upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrading your attack by 6 for 7 dollars");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else{ 
              window.alert("You outta money!");
            }
            break;
          case "LEAVE":
          case "leave":
            window.alert("You are now leaving the store.");
            break;
          default:
            window.alert("You did not type a valid opton, try again");
            shop();
            break;

        }
    };

  startGame();