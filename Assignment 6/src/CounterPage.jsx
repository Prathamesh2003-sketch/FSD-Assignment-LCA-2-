import { useState } from 'react';
import './CounterPage.css';

function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-site">
      <header className="counter-topbar">
        <a className="counter-brand" href="./">
          <span className="counter-brand-mark">A</span>
          <span>Assignment<span>Hub</span></span>
        </a>
        <a className="counter-back" href="./">← All assignments</a>
      </header>
      <main className="counter-page">
        <section className="counter-card">
          <span className="counter-eyebrow">PROJECT 06 / 06 · REACT</span>
          <h1>React Counter<span>.</span></h1>
          <p className="counter-intro">Increment, decrement, or reset the count using React state.</p>
          <div className="standalone-count" aria-live="polite">{count}</div>
          <div className="standalone-counter-actions">
            <button className="standalone-counter-button minus" type="button" aria-label="Decrement" onClick={() => setCount((value) => value - 1)}>−</button>
            <button className="standalone-reset" type="button" onClick={() => setCount(0)}>Reset</button>
            <button className="standalone-counter-button plus" type="button" aria-label="Increment" onClick={() => setCount((value) => value + 1)}>+</button>
          </div>
          <span className="counter-caption">React state, updated instantly</span>
        </section>
      </main>
    </div>
  );
}

export default CounterPage;
