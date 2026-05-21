import { Header } from './Header';
import { Options } from './Options';

import '../styles/wrapper.css';

export const Wrapper = () => {
  return (
    <section className='wrapper'>
      <Header />
      <Options />
    </section>
  );
};
