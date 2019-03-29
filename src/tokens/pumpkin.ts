import { Token, TokenType } from './token';

class Pumpkin extends Token {
    constructor() {
        super(TokenType.Pumpkin, 1);
    }
}

export default Pumpkin;
