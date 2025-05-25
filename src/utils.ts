
export const getSnakesMap = (): Record<number, number> => {
    const snakes = {
        16: 6,
        48: 26,
        62: 19,
        88: 24,
        95: 56,
        97: 78,
      };
      return snakes;
}

export const getLaddersMap = (): Record<number, number> => {
    const ladders = {
        2: 38,
        7: 14,
        8: 31,
        15: 26,
        28: 84,
        36: 44,
        51: 67,
        71: 91,
        77: 98,
        87: 94,
      };
    return ladders;     
}


export const applySnakeOrLadder = (snakes: Record<number, number>, ladders: Record<number, number>, pos: number) => {
    if (snakes[pos]) {
      console.log(`Oops! Snake from ${pos} → ${snakes[pos]}`);
      return snakes[pos];
    } else if (ladders[pos]) {
      console.log(`Yay! Ladder from ${pos} → ${ladders[pos]}`);
      return ladders[pos];
    }
    return pos;
};

export type Player = { id: number; color: string; position: number, token: string};

export const getPlayersInit = (size: number): 
 Player [] => {
    const colors = ['red','blue','green','yellow'];
    const playerToken = ['🔴', '🔵', '🟢', '🟡'];
    const playersInitState: Player[] = [];
    for(let i=1; i<=size; i++) {
      playersInitState.push({
        id: i,
        color: colors[i-1],
        position: 1,
        token: playerToken[i-1],
      });
    }
    return playersInitState;
}