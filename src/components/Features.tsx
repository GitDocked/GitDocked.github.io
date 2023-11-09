import React from 'react';
import Feature from './Feature';

export default function Features() {
  return (
    <>
      <h2 className='features'>Key Features</h2>
      <p className='features-description'>Here are the highlights of some features GitDocked offers.</p>
      <div className='features-grid'>
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </div>
    </>
  );
}
