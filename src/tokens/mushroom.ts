import Cauldron from '../cauldron';
import count from '../util/fills';
import Pumpkin from './pumpkin';
import { Token, TokenValue } from './token';

class Mushroom extends Token {
    private static readonly mushroomName: string = 'Mushroom';

    constructor(value: TokenValue) {
        super(Mushroom.mushroomName, value);
    }

    public spacesForward(cauldron: Cauldron): number {
        const pumpkins = count(cauldron.tokens, token => token.name === Pumpkin.pumpkinName);

        if (pumpkins === 1 || pumpkins === 2) {
            return this.value + 1;
        } else if (pumpkins >= 3) {
            return this.value + 2;
        } else {
            return this.value;
        }
    }
}

export default Mushroom;
