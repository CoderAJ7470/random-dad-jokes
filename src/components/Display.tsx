import { useGetJokesQuery } from '../state/quotesAPISlice';
import '../styles/display.css';

export const Display = () => {
  const { data: jokes } = useGetJokesQuery({});

  console.log('Jokes: ', jokes);
};
