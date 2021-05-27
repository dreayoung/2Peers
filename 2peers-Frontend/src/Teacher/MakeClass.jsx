import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import TwoPeersContext from '../context/TwoPeersContext';

export default function MakeClass({ isStudent, submission, ...props }) {
  const [code, setCode] = useState('');
  const { ...match } = props;
  const { params: { id } } = match;

  const {
    displaySwitch,
  } = useContext(TwoPeersContext);

  function preventDefault(e) {
    e.preventDefault();
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ code }),
    };

    if (isStudent) {
      fetch(`http://localhost:3000/student/${id}/classes`, options)
        .then((data) => data.json())
        .then((raw) => {
          submission(raw.class_id);
          displaySwitch(false);
        });
      return;
    }

    fetch(`http://localhost:3000/teachers/${id}/classes`, options)
      .then((data) => data.json())
      .then((raw) => {
        submission(raw.id);
        displaySwitch(false);
      });
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-sm">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <img src="https://img.icons8.com/dusk/64/000000/new.png" alt="new-class" className="w-10 h-15 mx-auto pb-2" />
            <h1 className="text-gray-400 text-lg font-bold">
              {isStudent ? 'Add a Class' : 'Make a new Class'}
            </h1>
            <p className="text-black-400 text-sm font-bold">Enter a class code below!</p>
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="mt-2">
                  <input className="block border border-green-500 rounded text-gray-700 text-lg font-bold mb-2" value={code} onChange={({ target }) => setCode(target.value)} name="code" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 px-4 py-3 sm:px-6 sm:flex sm:justify-center sm:flex-row-reverse">
            <button type="button" className="shadow bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-2 mb-2" onClick={(e) => { preventDefault(e); setCode(''); }}>
              Submit
            </button>
            <button type="button" className="shadow bg-green-400 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-2 mb-2" onClick={() => displaySwitch(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

//  <form onSubmit={(e) => { preventDefault(e); setCode(''); }}
// {isStudent ? 'Add a Class' : 'Make a new Class'}
// input: value={code} onChange={({ target }) => setCode(target.value)}
// cancel: <button onClick={() => displaySwitch(false)}

MakeClass.propTypes = {
  isStudent: PropTypes.bool,
  submission: PropTypes.func,
};

MakeClass.defaultProps = {
  isStudent: false,
  submission: null,
};
