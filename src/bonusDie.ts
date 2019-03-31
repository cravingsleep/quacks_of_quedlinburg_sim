import { Player } from './player';
import Pumpkin from './tokens/pumpkin';
import { randDiceRoll } from './util/fills';

/**
 * Rolls the bonus die on the player.
 */
function bonusDie(player: Player): Player {
    const dieRoll = randDiceRoll();

    if (dieRoll === 0 || dieRoll === 1) {
        return player.addVictoryPoints(1);
    } else if (dieRoll === 2) {
        return player.addVictoryPoints(2);
    } else if (dieRoll === 3) {
        return player.addTokenToBag(new Pumpkin());
    } else if (dieRoll === 4) {
        return player.addRubies(1);
    } else {
        return player.moveTeardropForward();
    }
}

export default bonusDie;
