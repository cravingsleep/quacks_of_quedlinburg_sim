import Cauldron from '../cauldron';
import { Player } from '../player';
import { Token, TokenType, TokenValue } from './token';

class Spider extends Token {
    /**
     * If any of the last two tokens were spiders gain a ruby (per spider).
     */
    public static onScored(cauldron: Cauldron, player: Player): Player {
        const cauldronTokens = cauldron.tokens;

        const lastTwoTokens = cauldronTokens.slice(cauldronTokens.length - 2, cauldronTokens.length + 2);

        return player.addRubies(lastTwoTokens.filter(token => token.tokenType === TokenType.Spider).length);
    }

    constructor(value: TokenValue) {
        super(TokenType.Spider, value);
    }
}

export default Spider;
