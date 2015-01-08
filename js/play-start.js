
function PlayStart(argument) {
  // body...
}


PlayStart.PK = function(playerOne, playerTwo) {
  var result = '';
  while (true) {
    result += playerTwo.getAttackInformation(playerOne);
    if (playerOne.hp <= 0) {
      result += playerOne.name + '输了';
      break;
    }

    result += playerOne.getAttackInformation(playerTwo);
    if (playerTwo.hp <= 0) {
      result += playerTwo.name + '输了';
      break;
    }
  }

  return result;
};

module.exports = PlayStart;
