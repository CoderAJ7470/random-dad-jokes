import '../styles/display.css';

import { Joke, Jokes } from '../helpers/types';

export const Display = ({
  jokesArray,
  isLoading,
}: {
  jokesArray: Array<Joke>;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return (
      <section className='jokes-display'>
        Please wait, retrieving jokes...
      </section>
    );
  }

  return (
    <section className='jokes-display'>
      {jokesArray &&
        jokesArray.map((joke: Joke) => {
          return (
            <p className='joke' key={joke.id}>
              {joke.joke}
            </p>
          );
        })}
    </section>
  );
};
