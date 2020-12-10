import React from 'react';
import NavBarHome from './NavBar/NavBarHome';

export default function About() {
  return (
    <div>
      <NavBarHome />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <p>Prof. Philippos Mordohai</p>
        <p>Assistants: </p>
        <p>Deep Kakadia</p>
        <p>Parth Parab</p>
      </div>
    </div>
  );
}
