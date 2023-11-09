import React from 'react';
import TeamMember from './TeamMember';

export default function Team() {
  return (
    <>
      <h2>Meet the team!</h2>
      <div className='team-grid'>
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </>
  );
}
