import { SetStateAction, useState } from 'react';
import { useGetJokesQuery } from '../state/jokesAPISlice';

import '../styles/options.css';
import { Display } from './Display';

export const Options = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [userInputPage, setUserInputPage] = useState('');

  const { data: jokes, isLoading } = useGetJokesQuery(pageNumber);
  const currentPage = jokes && jokes.current_page;
  const totalPages = jokes && jokes.total_pages;
  const results = jokes && jokes.results;

  const handleInputOnChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setUserInputPage(event.target.value);
  };

  const handleLoadPageButtonOnClick = () => {
    setPageNumber(parseInt(userInputPage));
    setUserInputPage('');
  };

  return (
    <>
      <section className='options-wrapper'>
        <p>
          Search for a specific page of dad jokes (returns 20 jokes/page):&nbsp;
          <input
            type='text'
            size={3}
            onChange={handleInputOnChange}
            value={userInputPage}
          />
          <button
            className='load-page-button'
            onClick={() => handleLoadPageButtonOnClick()}
            disabled={userInputPage === ''}
          >
            Load Dad Jokes
          </button>
        </p>
        <p>
          Showing page {currentPage} of {totalPages} pages
        </p>
        <p>
          <button
            className='paging-buttons'
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className='paging-buttons'
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </p>
      </section>
      <Display jokesArray={results} isLoading={isLoading} />
    </>
  );
};
