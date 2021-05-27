import React from 'react';
import Profile from '../Reusable/Profile';
import Classlist from '../Reusable/Classlist';

export default function Student(props) {
  return (
    <div className="grid justify-items-center">
      <Profile isStudent {...props} />
      <Classlist isStudent {...props} />
    </div>
  );
}
