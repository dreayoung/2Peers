/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect } from 'react-router-dom';

function ProtectedRoute({
  component, computedMatch, exact, path,
}) {
  console.log(exact, path);
  const Page = component;
  const validUser = localStorage.getItem('session-id');

  return validUser ? (
    <Page {...computedMatch} />
  ) : (
    <Redirect to="/login" />
  );
}

export default ProtectedRoute;
