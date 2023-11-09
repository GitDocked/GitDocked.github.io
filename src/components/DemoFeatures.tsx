import React from 'react';
import DemoLeft from './DemoLeft';
import DemoRight from './DemoRight';

export default function DemoFeatures() {
  return (
    <>
      <h2>GitDocked in Action</h2>
      <p>Visualize container metrics, GitHub Actions workflow, and container health comparisons.</p>
      <DemoLeft/>
      <DemoRight/>
      <DemoLeft/>
    </>
  );
}
