import { Token, TokenType } from './token';

class CherryBomb extends Token {
    constructor(value: 1 | 2 | 3) {
        super(TokenType.CherryBomb, value);
    }
}

export default CherryBomb;
