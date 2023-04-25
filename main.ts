interface Player {
    name: string;
    age: number;
    score: number; // elo rating
}

const data: Player[] = [
    {
        name: 'Magnus Carlsen',
        age: 40,
        score: 2850,
    },
    {
        name: 'Fabiano Caruana',
        age: 30,
        score: 2440,
    },
    {
        name: 'Hikaru Nakamura',
        age: 22,
        score: 2760,
    },
    {
        name: 'Ding Liren',
        age: 33,
        score: 2820,
    },
    {
        name: 'Maxime Vachier-Lagrave',
        age: 30,
        score: 2647,
    },
    {
        name: 'AliReza Firouzja',
        age: 19,
        score: 4324,
    },
];

const champions = (players: Player[]): Player[] => {
    const champions: Player[] = [];

    players.forEach((player) => {
        const isChampion = players.every((otherPlayer) => {
            if (player === otherPlayer) {
                return true;
            }

            const isStronger = player.score > otherPlayer.score;
            const isYounger = player.age < otherPlayer.age;

            return !(isStronger && isYounger) && !(isYounger && isStronger);
        });

        if (isChampion) {
            champions.push(player);
        }
    });

    return champions;
};

console.log(champions(data));
