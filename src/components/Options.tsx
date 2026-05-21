import { useGetJokesQuery } from '../state/jokesAPISlice';
import { useEffect } from 'react';
import { Display } from './Display';
import { useCursorPagination } from '../../src/hooks/useCursorPagination';

import '../styles/options.css';

export const Options = () => {
  const { cursor, goToNext, goToPrev, reset, canGoPrev } =
    useCursorPagination();

  const { data: jokes, isLoading } = useGetJokesQuery(cursor);

  const nextCursor = jokes?.next_cursor;
  const results = jokes?.items;

  useEffect(() => {
    const jokesContainer = document.querySelector('.jokes-display');

    jokesContainer?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [jokes]);

  return (
    <>
      <section className='options-wrapper'>
        <section>
          <button
            className='paging-buttons'
            onClick={goToPrev}
            disabled={!canGoPrev}
          >
            Prev
          </button>

          <button
            className='paging-buttons'
            onClick={() => goToNext(nextCursor)}
            disabled={!nextCursor}
          >
            Next
          </button>
        </section>
      </section>

      <Display jokesArray={results ?? []} isLoading={isLoading} />
    </>
  );
};
