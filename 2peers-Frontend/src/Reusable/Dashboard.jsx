import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <header className="bg-white shadow flex items-center justify-between">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-purple-900">
          WELCOME TO 2PEERS TUTORING
        </h1>
        <h2 className="text-2xl font-bold text-gray-700">WE HAVE A LOT IN STORE FOR YOU</h2>
        <h4>Missing an account? No worries</h4>
        <Link to="/signUp">
          <p className="font-medium text-indigo-600 hover:text-indigo-500">Sign up here!</p>
        </Link>
      </div>
    </header>
  );
}

export default Dashboard;
