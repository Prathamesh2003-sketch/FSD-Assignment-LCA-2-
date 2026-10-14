import React from 'react';
import './App.css';

// ProfileCard Component using props
function ProfileCard({ name, image, description }) {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} className="profile-img" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-desc">{description}</p>
      <button 
        className="profile-btn" 
        onClick={() => alert(`Connected with ${name}!`)}
      >
        Connect
      </button>
    </div>
  );
}

// App Component rendering multiple cards
function App() {
  return (
    <div className="app-container">
      <h1 className="title">Assignment 4: React Profile Cards</h1>
      
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
    </div>
  );
}

export default App;
