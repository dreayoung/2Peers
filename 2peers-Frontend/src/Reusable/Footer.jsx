import React from 'react';

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-800">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img src="../icons8-brain-64.png" alt="logo" className="w-10 h-10 text-white p-2 bg-white rounded-full" />
        </a>
        <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2021 2Peers —
          <a href="https://twitter.com/knyttneve" className="text-gray-200 ml-1" rel="noopener noreferrer" target="_blank">Tutoring</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://www.khanacademy.org/signup" className="text-gray-500">
            <img src="https://avatars.githubusercontent.com/u/15455?s=280&v=4" alt="khan academy" className="w-10 h-10" />
          </a>
          <a href="https://www.freecodecamp.org/" className="ml-3 text-gray-500">
            <img src="https://img2.pngio.com/html-freecodecamp-png-1030_1030.png" alt="free code camp" className="w-11 h-11" />
          </a>
          <a href="https://quizlet.com/" className="ml-3 text-gray-500">
            <img src="../quizlet-logo-png.png" alt="quizlet" className="w-10 h-10" />
          </a>
        </span>
      </div>
    </footer>
  );

  /* <a href="https://www.khanacademy.org/signup" rel="noreferrer" target="_blank" classNameName="opacity-60">
              <img src="../khanacademylogo.png" alt="khan academy" />
            </a>
            <a href="https://www.freecodecamp.org/" rel="noreferrer" target="_blank" classNameName="opacity-60">
              <img src="../free-code-camp-logo.png" alt="free code camp" />
            </a>
            <a href="https://quizlet.com/" rel="noreferrer" target="_blank" classNameName="opacity-60">
              <img src="../quizlet-logo-png.png" alt="quizlet" />
            </a> */
}

export default Footer;
