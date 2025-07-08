import { SetStateAction, useState } from 'react';
import { useGetJokesQuery } from '../state/jokesAPISlice';
import { checkUserInput } from '../helpers/functions';

import '../styles/options.css';
import { Display } from './Display';

export const Options = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [userInputPage, setUserInputPage] = useState('');
  const [error, setError] = useState('');

  const { data: jokes, isLoading } = useGetJokesQuery(pageNumber);
  const currentPage = jokes && jokes.current_page;
  const totalPages = jokes && jokes.total_pages;
  const results = jokes && jokes.results;

  const handleInputOnChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setUserInputPage(event.target.value);
  };

  const handleOnKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      const userInput = parseInt(userInputPage);
      const errorMessage = checkUserInput(userInput, totalPages as never);
      setError(errorMessage);

      if (!errorMessage) {
        setPageNumber(parseInt(userInputPage));
      }
    }
  };

  const handleLoadPageButtonOnClick = () => {
    setPageNumber(parseInt(userInputPage));
    setUserInputPage('');
  };

  return (
    <>
      <section className='options-wrapper'>
        <p className='search-by-page-instructions'>
          Search for a specific page of dad jokes (returns 20 jokes/page). Input
          must be a number between 1 and {totalPages} (inclusive):&nbsp;
          <input
            type='text'
            size={3}
            onKeyDown={handleOnKeyDown}
            onChange={handleInputOnChange}
            value={userInputPage}
          />
        </p>
        <p className='error-message'>{error}</p>
        <button
          className='load-page-button'
          onClick={() => handleLoadPageButtonOnClick()}
          disabled={userInputPage === ''}
        >
          Load Dad Jokes
        </button>

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
