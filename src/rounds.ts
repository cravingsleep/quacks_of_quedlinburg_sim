import { Player } from './player';
import CherryBomb from './tokens/cherryBomb';
import { Token, TokenType } from './tokens/token';

/**
 * Represents a round.
 */
interface IRound {
    /**
     * The available tokens in the shop.
     */
    availableTokens: TokenType[];

    /**
     * Any effects the round has on the players.
     */
    effectPlayer(player: Player): Player;
}

/**
 * The default tokens available in the shop.
 */
const DEFAULT_TOKENS_AVAILABLE = [
    TokenType.CrowSkull,
    TokenType.Hawkmoth,
    TokenType.Mushroom,
    TokenType.Pumpkin,
    TokenType.Spider
];

const rounds: IRound[] = [
    {
        availableTokens: DEFAULT_TOKENS_AVAILABLE,
        effectPlayer(player: Player): Player { return player; },
    },
    {
        availableTokens: DEFAULT_TOKENS_AVAILABLE,
        effectPlayer(player: Player): Player { return player; }
    },
    {
        availableTokens: DEFAULT_TOKENS_AVAILABLE.concat(TokenType.Mandrake),
        effectPlayer(player: Player): Player { return player; }
    },
    {
        availableTokens: DEFAULT_TOKENS_AVAILABLE.concat([TokenType.Mandrake, TokenType.GhostBreath]),
        effectPlayer(player: Player): Player { return player; }
    },
    {
        availableTokens: DEFAULT_TOKENS_AVAILABLE.concat([TokenType.Mandrake, TokenType.GhostBreath]),
        effectPlayer(player: Player): Player { return player; }
    },
    {
        availableTokens: DEFAULT_TOKENS_AVAILABLE.concat([TokenType.Mandrake, TokenType.GhostBreath]),
        effectPlayer(player: Player): Player {
            return player.addTokenToBag(new CherryBomb(1));
        }
    },
    {
        availableTokens: DEFAULT_TOKENS_AVAILABLE.concat([TokenType.Mandrake, TokenType.GhostBreath]),
        effectPlayer(player: Player): Player {
            return player;
        }
    },
    {
        availableTokens: DEFAULT_TOKENS_AVAILABLE.concat([TokenType.Mandrake, TokenType.GhostBreath]),
        effectPlayer(player: Player): Player {
            return player;
        }
    },
    {
        availableTokens: DEFAULT_TOKENS_AVAILABLE.concat([TokenType.Mandrake, TokenType.GhostBreath]),
        effectPlayer(player: Player): Player {
            return player;
        }
    },
];

export default rounds;
