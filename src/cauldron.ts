import CherryBomb from './tokens/cherryBomb';
import { Token, TokenValue } from './tokens/token';

class Cauldron {
    /**
     * The positions on the cauldron of the rubies.
     */
    // public static readonly RUBY_POSITIONS = [
    //     5, 9, 13, 16, 20, 24, 28, 30, 34, 36, 40, 42, 46, 50, 52
    // ];

    /**
     * The limit of cherry bomb values before an explosion.
     */
    private static readonly EXPLOSION_THRESHOLD = 7;

    /**
     * The victory points round the 35 cauldron track.
     */
    private static readonly VICTORY_POINT_SCALE = [
        0, 0, 0, 0, 0, 0,
        1, 1, 1, 1,
        2, 2, 2, 2,
        3, 3, 3, 3,
        4, 4, 4, 4,
        5, 5, 5, 5,
        6, 6, 6,
        7, 7, 7,
        8, 8, 8,
        9, 9, 9,
        10, 10, 10,
        11, 11, 11,
        12, 12, 12, 12,
        13, 13, 13,
        14, 14
    ];

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

    /**
     * Returns a new cauldron with a placed token.
     */
    public placeToken(bag: Token[], token: Token): {bag: Token[], cauldron: Cauldron} {
        return token.onPlace(bag, new Cauldron(this.tokens.concat(token)));
    }

    private cherryBombValues(tokens: Token[]): TokenValue[] {
        return tokens
            .filter(token => token instanceof CherryBomb)
            .map(cherryBomb => cherryBomb.value);
    }
}

export default Cauldron;
