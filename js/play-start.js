
function playStart(argument) {
  // body...
}

playStart.start = function(playerOne, playerTwo) {
  var result = '';
  while (true) {
    
    result += playerOne.getAttackInformation(playerTwo);
    if (playerTwo.hp <= 0) {
      result += playerTwo.name + '输了';
      break;
    }

    result += playerTwo.getAttackInformation(playerOne);
    if (playerOne.hp <= 0) {
      result += playerOne.name + '输了';
      break;
    }
  }
  return result;
};

module.exports = playStart;
