# Task

The statement:
You have a list of chess players with their ages and scores (elo).
You have to extract from the list the "champions"
A player is said to be a "champion" if and only if there is no one else in the list who "eliminates him", i.e.:
- no one else is both strictly stronger and younger or even old
  and
- no one else is both strictly younger and stronger or even score

Your mission: in the language of your choice, code the function to find the champions of the list

Particular emphasis will be placed on the following points:
- The accuracy of the results: Has the candidate thought about the overall logic and the particular cases?
- Performance: How does the algorithm behave as the number of players grows?
- The clarity and readability of the code

# Setup

Make sure you have node installed. If not, you can download it [here](https://nodejs.org/en/download/).

```bash
npm run start
```

After that results should be outputted to the console.