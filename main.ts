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

// Time complexity: ~O(n^2)
const championsList = (players: Player[]): Player[] => {
    const champions: Player[] = [];

    const sortedPlayers = players.slice().sort((a, b) => b.score - a.score);

    sortedPlayers.forEach((player, index) => {
        if (index === 0) {
            champions.push(player);
            return;
        }

        const isChampion = champions.every((champion) => {
            const isStrongerOrSameScore = player.score >= champion.score;
            const isYoungerOrSameAge = player.age <= champion.age;

            return !(isStrongerOrSameScore && isYoungerOrSameAge);
        });

        if (isChampion) {
            champions.push(player);
        }
    });

    return champions;
};

console.log(championsList(data));
