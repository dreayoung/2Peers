import React from 'react';
import Banner from '../Reusable/Banner';
import Footer from '../Reusable/Footer';
// import Dashboard from '../Reusable/Dashboard';

// const imageStyle = {
//   height: '500px',
// };

export default function Home() {
  return (
    <div>
      <Banner />
      {/* <Dashboard /> */}
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              WELCOME
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">2Peers Tutoring</h1>
            <br />
            <p className="mb-8 leading-relaxed">
              2Peers mission is to improve the learning
              experience of students through the use of peer to peer
              learning. By creating a virtual classNameNameroom envirnment students are
              able interact with one another and improve their understanding
              of subjects by leveraging their peers knowledge.
            </p>
          </div>
          <div className="portrait">
            <img className="portrait__img" src="https://www.pngkey.com/png/full/512-5127105_steven-bucks-sunglasses-260315wd-de-steven-universe-steven.png" alt="Me" />
            <img className="portrait__img" src="https://www.pngkit.com/png/full/115-1156327_steven-universe-steven-quartz-universe-su-gem-steven.png" alt="Me" />
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">MEET THE TEAM</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Wonderful Engineers</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-300 text-white flex-shrink-0">
                    <img src="https://img.icons8.com/office/80/000000/human-torch.png" alt="human-torch" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">ITZEL</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Talk about your role for this project</p>
                  <a href="www.google.com" className="mt-3 text-indigo-500 inline-flex items-center">
                    LinkedIn Profile
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-300 text-white flex-shrink-0">
                    <img src="https://img.icons8.com/office/80/000000/genie.png" alt="genie" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">JASON</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Talk about your role for this project</p>
                  <a href="www.google.com" className="mt-3 text-indigo-500 inline-flex items-center">
                    LinkedIn Profile
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-pink-300 text-white flex-shrink-0">
                    <img src="https://img.icons8.com/office/80/000000/cheburashka.png" alt="monk-adorbs" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">ANDREA</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Talk about your role for this project</p>
                  <a href="www.google.com" className="mt-3 text-indigo-500 inline-flex items-center">
                    LinkedIn Profile
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// 2Peers mission is to improve the learning
// experience of students through the use of peer to peer
// learning. By creating a virtual classNameNameroom envirnment students are
// able interact with one another and improve their understanding
// of subjects by leveraging their peers knowledge.

//   Our team is composed of fullstack software developers
// and seeks to improve the educational experience of students
// through tools that allow them to communicate despite these
// trying times.

// https://images.unsplash.com/photo-1618346136472-090de27fe8b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80
// https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80
