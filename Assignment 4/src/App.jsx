import { useState } from 'react';
import './App.css';

// ProfileCard Component using props
function ProfileCard({ name, image, description }) {
  const [connected, setConnected] = useState(false);

  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} className="profile-img" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-desc">{description}</p>
      <button
        className={connected ? 'profile-btn connected' : 'profile-btn'}
        onClick={() => setConnected((value) => !value)}
      >
        {connected ? 'Connected ✓' : 'Connect'}
      </button>
    </div>
  );
}

// App Component rendering multiple cards
function App() {
  return (
    <>
      <header className="standalone-topbar">
        <a className="brand" href="https://prathamesh2003-sketch.github.io/FSD-Assignment-LCA-2-/">
          <span className="brand-mark">A</span>
          <span>Assignment<span className="brand-accent">Hub</span></span>
        </a>
        <a className="back-link" href="https://prathamesh2003-sketch.github.io/FSD-Assignment-LCA-2-/">← All assignments</a>
      </header>
      <main className="profile-page">
        <div className="page-heading">
          <span className="eyebrow">PROJECT 04 / 06 · REACT</span>
          <h1>People worth knowing<span>.</span></h1>
          <p>Reusable profile cards, powered by React props.</p>
        </div>
        <div className="cards-wrapper">
          <ProfileCard
            name="Sarah Jenkins"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            description="Frontend developer passionate about building accessible user interfaces and modern web experiences."
          />

          <ProfileCard
            name="Alex Rivera"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
            description="Full-stack engineer, open-source contributor, and coffee enthusiast."
          />
        </div>
        <footer className="standalone-footer">Designed with curiosity. Built through practice.</footer>
      </main>
    </>
  );
}

export default App;
