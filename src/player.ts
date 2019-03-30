import shuffle from 'fisher-yates-shuffle';
import Cauldron from './cauldron';
import CherryBomb from './tokens/cherryBomb';
import Pumpkin from './tokens/pumpkin';
import Spider from './tokens/spider';
import { Token } from './tokens/token';
import { tail } from './util/fills';

/**
 * The different types of colour a player can be.
 */
const enum Colour {
    RED,
    GREEN,
    BLUE,
    YELLOW
}

class Player {
    /**
     * A players starting bag.
     */
    private static readonly STARTING_BAG: Token[] = [
        new Spider(1),
        new Pumpkin(),
        new CherryBomb(3),
        new CherryBomb(2), new CherryBomb(2),
        new CherryBomb(1), new CherryBomb(1), new CherryBomb(1), new CherryBomb(1)
    ];

    /**
     * The colour of the player board.
     */
    public readonly colour: Colour;

    /**
     * The players bag.
     */
    public readonly bag: Token[];

    /**
     * The amount of rubies the player holds.
     */
    public readonly rubies: number;

    /**
     * The position of the teardrop.
     */
    public readonly teardrop: number;

    /**
     * The position of the rat tail.
     */
    public readonly ratTails: number;

    constructor(colour: Colour, bag: Token[] = Player.STARTING_BAG,
                rubies: number = 0, teardrop: number = 0, ratTails: number = 0) {
        this.colour = colour;
        this.bag = bag;
        this.rubies = rubies;
        this.teardrop = teardrop;
        this.ratTails = ratTails;
    }

    /**
     * Plays a round, creating a cauldron.
     */
    public playRound(): Cauldron {
        // shuffle the bag
        const shuffledBag = shuffle(this.bag);

        // create a blank cauldron
        const startingCauldron = new Cauldron();

        // play tokens as long as it isn't risky
        const plays = shuffledBag.reduce(({ bag, cauldron }, currentToken) => {
            if (cauldron.nextMoveRisky(bag)) {
                return {
                    bag,
                    cauldron
                };
            } else {
                return cauldron.placeToken(tail(bag), currentToken);
            }
        }, { bag: shuffledBag, cauldron: startingCauldron });

        return plays.cauldron;
    }

    /**
     * Adds a token to the bag.
     */
    public addTokenToBag(token: Token): Player {
        const newBag = this.bag.concat(token);

        return new Player(this.colour, newBag, this.rubies, this.teardrop, this.ratTails);
    }

    /**
     * Adds rubies to the player.
     */
    public addRubies(rubies: number): Player {
        return new Player(this.colour, this.bag, this.rubies + rubies, this.teardrop, this.ratTails);
    }
}

export { Colour, Player };
