import { useGetJokesQuery } from '../state/quotesAPISlice';

import '../styles/options.css';

export const Options = () => {
  const { data: jokes, isLoading } = useGetJokesQuery({});
  const currentPage = jokes && jokes.current_page;
  const totalPages = jokes && jokes.total_pages;

  return (
    <section className='options-wrapper'>
      <p>
        Search for a specific page of dad jokes (returns 20 jokes/page):{' '}
        <input type='text' size={3} />
      </p>
      <p>
        Showing page {currentPage} of {totalPages} pages{' '}
      </p>
      <p>
        <button className='paging-buttons' disabled={currentPage === 1}>
          Prev
        </button>
        <button disabled={currentPage === totalPages}>Next</button>
      </p>
    </section>
  );
};
