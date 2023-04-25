interface Player {
    name: string;
    age: number;
    score: number; // elo rating
}

const playersData: Player[] = [
    { name: 'Magnus Carlsen', age: 40, score: 2850 },
    { name: 'Fabiano Caruana', age: 30, score: 2440 },
    { name: 'Hikaru Nakamura', age: 22, score: 2760 },
    { name: 'Ding Liren', age: 33, score: 2820 },
    { name: 'Maxime Vachier-Lagrave', age: 30, score: 2647 },
    { name: 'AliReza Firouzja', age: 19, score: 4324 },
];

const sortPlayersByScoreAndAge = (a: Player, b: Player): number => {
    if (b.score !== a.score) return b.score - a.score;
    return a.age - b.age;
}

const isPlayerBetter = (player: Player, lastChampion: Player): boolean => {
    return (player.score > lastChampion.score) && (player.age < lastChampion.age);
}

// Time complexity: ~O(n*log(n))
const getChampionsList = (players: Player[]): Player[] => {
    const champions: Player[] = [];
    const sortedPlayers = players.slice().sort(sortPlayersByScoreAndAge);

    sortedPlayers.forEach((player) => {
        if (champions.length === 0 || isPlayerBetter(player, champions[champions.length - 1])) {
            champions.push(player);
        }
    });

    return champions;
};

console.log(getChampionsList(playersData));
