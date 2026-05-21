export interface Jokes {
  jokesArray: Joke[];
}

export interface JokeData {
  results: Joke[];
  next: string | null;
  previous: string | null;
}

export interface Joke {
  id: string;
  joke: string;
}
