<<<<<<< HEAD
import React from 'react';

function Footer() {
  return (
    <div className="w-full bg-purple-500 text-white">
      <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
        <div className="w-full pt-12 flex sm:flex-row space-y-2 justify-center">
          <div className="w-full sm:w-2/5 flex flex-row space-y-4 space-x-6">
            <a href="https://www.khanacademy.org/signup" rel="noreferrer" target="_blank" className="opacity-60">
              <img src="../khanacademylogo.png" alt="khan academy" />
            </a>
            <a href="https://www.freecodecamp.org/" rel="noreferrer" target="_blank" className="opacity-60">
              <img src="../free-code-camp-logo.png" alt="free code camp" />
            </a>
            <a href="https://quizlet.com/" rel="noreferrer" target="_blank" className="opacity-60">
              <img src="../quizlet-logo-png.png" alt="quizlet" />
            </a>
          </div>
        </div>
        <div className="opacity-60 pt-2">
          <p>© 2021 2Peers Tutoring App</p>
        </div>
      </div>
    </div>
  );
=======
import React from "react";

function Footer() {
    return (
        <div class="w-full bg-purple-500 text-white">
        <div class="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
          <div class="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
            <div class="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
              <h2 class="opacity-60">Extra Resources</h2>
            </div>
            <div class="w-full sm:w-1/5 flex flex-col space-y-4">
                <a href="https://www.khanacademy.org/signup" class="opacity-60">Khan Academy </a>
                <a href="https://www.freecodecamp.org/" class="opacity-60">FreeCodeCamp </a>
                <a href="https://quizlet.com/" class="opacity-60">Quizlet</a>
            </div>
            <div class="w-full sm:w-1/5 pt-6 flex items-end mb-1">
              <div class="flex flex-row space-x-4">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-google"></i>
              </div>
            </div>
          </div>
          <div class="opacity-60 pt-2">
            <p>© 2021 Free Tutoring App</p>
          </div>
        </div>
      </div>
    );
>>>>>>> fecc1c53e2ee44a156661aaac0d2672039d2c926
}

export default Footer;
