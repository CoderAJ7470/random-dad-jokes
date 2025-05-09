import '../styles/controls.css';

export const Controls = () => {
  return (
    <section className='controls-wrapper'>
      <section className='selector-wrapper'>
        <input
          className='selectors'
          type='radio'
          id='randomQuotes'
          name='selection'
          value='Show Random Quotes'
          defaultChecked
        />
        <label htmlFor='randomQuotes'>Show Random Quotes</label>
      </section>
      <section>
        <input
          className='selectors'
          type='radio'
          id='randomJokes'
          name='selection'
          value='Show Random Jokes'
        />
        <label htmlFor='randomJokes'>Show Random Jokes</label>
      </section>
    </section>
  );
};
