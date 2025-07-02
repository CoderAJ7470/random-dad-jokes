import { Header } from './Header';
import { Options } from './Options';
import { Display } from './Display';

import '../styles/wrapper.css';

export const Wrapper = () => {
  return (
    <section className='wrapper'>
      <Header />
      <Options />
      {/* <Display /> */}
    </section>
  );
};
