import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [saved, setSaved] = useState(false);

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setSaved(false);
  }

  function submitForm(event) {
    event.preventDefault();
    setSaved(true);
  }

  const filledFields = Object.values(form).filter((value) => value.trim()).length;

  return (
    <>
      <header className="standalone-topbar">
        <a className="brand" href="https://prathamesh2003-sketch.github.io/FSD-Assignment-LCA-2-/">
          <span className="brand-mark">A</span>
          <span>Assignment<span className="brand-accent">Hub</span></span>
        </a>
        <a className="back-link" href="https://prathamesh2003-sketch.github.io/FSD-Assignment-LCA-2-/">← All assignments</a>
      </header>
      <main className="form-page">
        <div className="page-heading">
          <span className="eyebrow">PROJECT 05 / 06 · REACT</span>
          <h1>Make it yours<span>.</span></h1>
          <p>A controlled form with a live preview of your React state.</p>
        </div>
        <div className="form-layout">
          <form className="controlled-form" onSubmit={submitForm}>
            <div className="form-field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" value={form.name} onChange={updateField} placeholder="Type your name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={updateField} placeholder="Write a short message..." rows="5" />
            </div>
            <button className="submit-button" type="submit">Save preview</button>
            {saved && <p className="save-message" role="status">Your preview has been saved locally.</p>}
          </form>
          <aside className="live-preview" aria-live="polite">
            <div className="preview-heading"><span className="live-dot" /> LIVE PREVIEW</div>
            <h2>{form.name || 'Your name appears here'}</h2>
            <p>{form.email || 'you@example.com'}</p>
            <blockquote>{form.message || 'Your message will show up here as you type.'}</blockquote>
            <span className="field-count">{filledFields} of 3 fields filled</span>
          </aside>
        </div>
        <footer className="standalone-footer">Designed with curiosity. Built through practice.</footer>
      </main>
    </>
  );
}

export default App;
