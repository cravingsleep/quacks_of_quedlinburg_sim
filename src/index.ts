import Cauldron from './cauldron';
import { Colour, Player } from './player';
import rounds from './rounds';

// set up the game
const redPlayer = new Player(Colour.RED, Player.STARTING_BAG, 0, 0, 0, 0);
const greenPlayer = new Player(Colour.GREEN, Player.STARTING_BAG, 0, 0, 0, 0);
const bluePlayer = new Player(Colour.BLUE, Player.STARTING_BAG, 0, 0, 0, 0);
const yellowPlayer = new Player(Colour.YELLOW, Player.STARTING_BAG, 0, 0, 0, 0);

const allPlayers = [redPlayer, greenPlayer, bluePlayer, yellowPlayer];

rounds.slice(0, 1).reduce((players, round, roundNumber) => {
    // the effects of the round
    const roundedPlayers = players.map(round.effectPlayer);

    // each player plays there cauldron
    const playerCauldrons: { [colour: number]: Cauldron } = roundedPlayers
        .reduce((cauldronMap, player) => {
            return {...cauldronMap, [player.colour]: player.playRound() };
        }, {});

    Object.entries(playerCauldrons).forEach(([playerColour, cauldron]) => {
        const player = roundedPlayers[parseInt(playerColour, 10)];
        const cauldronScore = cauldron.score(player.teardrop, player.ratTails);
        console.log(`Player ${playerColour}`);
        console.log(cauldron);
        console.log(`Score: ${cauldronScore}`);
        console.log(`Victory Points ${cauldron.victoryPoints(cauldronScore)}`);
    });

    return roundedPlayers;
}, allPlayers);
