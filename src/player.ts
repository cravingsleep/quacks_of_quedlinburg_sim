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
    public static readonly STARTING_BAG: Token[] = [
        new Spider(1),
        new Pumpkin(),
        new CherryBomb(3),
        new CherryBomb(2), new CherryBomb(2),
        new CherryBomb(1), new CherryBomb(1), new CherryBomb(1), new CherryBomb(1)
    ];

    /**
     * 
     * @param colour - The colour of the player board.
     * @param bag - The players bag.
     * @param rubies - The amount of rubies the player holds.
     * @param teardrop - The position of the teardrop.
     * @param victoryPoints - How many victory points the player has.
     */
    constructor(public readonly colour: Colour,
                public readonly bag: Token[] = Player.STARTING_BAG,
                public readonly rubies: number,
                public readonly teardrop: number,
                public readonly victoryPoints: number) { }

    /**
     * Plays a round, creating a cauldron.
     *
     * @param ratTails - the amount of rat tails the cauldron starts with
     */
    public playRound(ratTails: number): Cauldron {
        // shuffle the bag
        const shuffledBag = shuffle(this.bag);

        // create a blank cauldron
        const startingCauldron = new Cauldron(this.colour, this.teardrop, ratTails);

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

        return new Player(this.colour, newBag, this.rubies, this.teardrop, this.victoryPoints);
    }

    /**
     * Adds rubies to the player.
     */
    public addRubies(rubies: number): Player {
        return new Player(this.colour, this.bag, this.rubies + rubies,
            this.teardrop, this.victoryPoints);
    }

    /**
     * Adds victory points to the player.
     */
    public addVictoryPoints(victoryPoints: number): Player {
        return new Player(this.colour, this.bag, this.rubies,
            this.teardrop, this.victoryPoints + victoryPoints);
    }

    /**
     * Moves the teardrop forward one.
     */
    public moveTeardropForward(): Player {
        return new Player(this.colour, this.bag, this.rubies,
            this.teardrop + 1, this.victoryPoints);
    }
}

export { Colour, Player };
