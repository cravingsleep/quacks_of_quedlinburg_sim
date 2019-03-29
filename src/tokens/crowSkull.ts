import shuffle from 'fisher-yates-shuffle';
import { Player } from '../player';
import { Token, TokenType, TokenValue } from './token';

class CrowSkull extends Token {
    /**
     * The amount of tokens to draw when placed.
     */
    private static readonly TOKEN_DRAWS: { [n: number]: number } = {
        1: 1,
        2: 2,
        4: 3
    };

    constructor(value: 1 | 2 | 4) {
        super(TokenType.CrowSkull, value);
    }

    /**
     * The crow skull on placing allows drawing some tokens to place.
     */
    public onPlace(player: Player): Player {
        // grab the amount of tokens to draw
        const tokensToDraw = CrowSkull.TOKEN_DRAWS[this.value];

        // the tokens taken from the bag
        const drawnTokens = shuffle(player.bag).slice(0, tokensToDraw);

        // TODO improve this strategy
        // take the highest value chip which is not a cherry bomb
        const placedToken = drawnTokens
            .filter(token => token.tokenType !== TokenType.CherryBomb)
            .reduce((acc, current) => {
                if (current.value > acc.value) {
                    return current;
                } else {
                    return acc;
                }
            }, drawnTokens[0]);

        const newCauldron = player.cauldron.placeToken(placedToken);

        const newBag = player.bag.splice(player.bag.indexOf(placedToken), 1);

        return new Player(player.colour, player.bag, player.cauldron, player.rubies);
    }
}

export default CrowSkull;
