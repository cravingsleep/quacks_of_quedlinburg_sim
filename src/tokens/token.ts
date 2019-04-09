import Cauldron from '../cauldron';
import { Player } from '../player';

/**
 * All the token types.
 */
const enum TokenType {
    Pumpkin,
    Spider,
    CherryBomb,
    Mushroom,
    Hawkmoth,
    GhostBreath,
    CrowSkull,
    Mandrake
}

/**
 * What values a token could be.
 */
type TokenValue = 1 | 2 | 3 | 4;

/**
 * Base class for all tokens.
 */
abstract class Token {
    /**
     * @param tokenType - the type of the token
     * @param value - the value of the token
     */
    constructor(
        public readonly tokenType: TokenType,
        public readonly value: TokenValue) { }

    /**
     * How many spaces forward the token goes.
     */
    public spacesForward(cauldronTokens: Token[]): number {
        return this.value;
    }

    /**
     * Some tokens can alter the cauldron on placement.
     */
    public onPlace(bag: Token[], cauldron: Cauldron): { bag: Token[], cauldron: Cauldron } {
        return { bag, cauldron };
    }
}

export { Token, TokenValue, TokenType };
