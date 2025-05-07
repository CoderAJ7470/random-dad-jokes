import { Controls } from './Controls';
import { Display } from './Display';

import '../styles/machine.css';

export const Machine = () => {
  return (
    <section className='machine-wrapper'>
      <Controls />
      <Display />
    </section>
  );
};
