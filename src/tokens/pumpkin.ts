import { Token } from './token';

class Pumpkin extends Token {
    public static readonly pumpkinName: string = 'Pumpkin';

    constructor() {
        super(Pumpkin.pumpkinName, 1);
    }
}

export default Pumpkin;
