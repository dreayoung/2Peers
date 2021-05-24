/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect } from 'react-router-dom';

function ProtectedRoute({ component }) {
  const Page = component;
  const validUser = localStorage.getItem('session-id');

  return validUser ? (
    <Page />
  ) : (
    <Redirect to="/login" />
  );
}

export default ProtectedRoute;
