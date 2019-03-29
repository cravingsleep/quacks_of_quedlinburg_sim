import CherryBomb from './tokens/cherryBomb';
import { Token, TokenValue } from './tokens/token';

class Cauldron {
    /**
     * The limit of cherry bomb values before an explosion.
     */
    private static readonly EXPLOSION_THRESHOLD = 7;

    /**
     * The tokens in the cauldron.
     */
    public readonly tokens: Token[];

    constructor(tokens: Token[] = []) {
        this.tokens = tokens;
    }

    /**
     * If one more chip is drawn can the pot explode?
     */
    public nextMoveRisky(bag: Token[]): boolean {
        const sumOfCherryBombs = this.cherryBombValues(this.tokens)
            .reduce((acc, tokenValue) => acc + tokenValue, 0);

        const bagCherryBombs = this.cherryBombValues(bag);

        const largestCherryBomb = Math.max(...bagCherryBombs);

        return sumOfCherryBombs + largestCherryBomb > Cauldron.EXPLOSION_THRESHOLD;
    }

    private cherryBombValues(tokens: Token[]): TokenValue[] {
        return tokens
            .filter(token => token instanceof CherryBomb)
            .map(cherryBomb => cherryBomb.value);
    }
}

export default Cauldron;
