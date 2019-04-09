import bonusDie from './bonusDie';
import { Colour, Player } from './player';
import rounds from './rounds';

// set up the game
const redPlayer = new Player(Colour.RED, Player.STARTING_BAG, 0, 0, 0);
const greenPlayer = new Player(Colour.GREEN, Player.STARTING_BAG, 0, 0, 0);
const bluePlayer = new Player(Colour.BLUE, Player.STARTING_BAG, 0, 0, 0);
const yellowPlayer = new Player(Colour.YELLOW, Player.STARTING_BAG, 0, 0, 0);

const allPlayers = [redPlayer, greenPlayer, bluePlayer, yellowPlayer];

rounds.slice(0, 1).reduce((players, round, roundNumber) => {
    // the effects of the round
    const roundedPlayers = players.map(round.effectPlayer);

    // each player plays there cauldron
    const playerCauldrons = roundedPlayers.map(player => player.playRound(0));

    playerCauldrons.forEach(cauldron => {
        const player = roundedPlayers[cauldron.colour];
        const cauldronScore = cauldron.score();
        console.log(`Player ${cauldron.colour}`);
        console.log(cauldron);
        console.log(`Score: ${cauldronScore}`);
        console.log(`Victory Points ${cauldron.victoryPoints(cauldronScore)}`);
    });

    const highestScore = Math.max(...playerCauldrons.map(cauldron => cauldron.score()));

    const bonusDiePlayers = playerCauldrons
                                .filter(cauldron => cauldron.score() === highestScore)
                                .map(cauldron => cauldron.colour);

    const bonusDiedPlayers = roundedPlayers.map(player => {
        if (bonusDiePlayers.includes(player.colour)) {
            return bonusDie(player);
        } else {
            return player;
        }
    });

    console.log(bonusDiePlayers);
    console.log(bonusDiedPlayers);

    return bonusDiedPlayers;
}, allPlayers);
