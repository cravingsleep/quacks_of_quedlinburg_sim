import Cauldron from '../cauldron';
import { count } from '../util/fills';
import { Token, TokenType, TokenValue } from './token';

class Mushroom extends Token {
    constructor(value: TokenValue) {
        super(TokenType.Mushroom, value);
    }

    public spacesForward(cauldronTokens: Token[]): number {
        const pumpkins = count(cauldronTokens, token => token.tokenType === TokenType.Pumpkin);

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
