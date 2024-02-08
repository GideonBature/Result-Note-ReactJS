import React from 'react';

const Card = ({ title, text }) => {
  return (
    <div className="p-4 max-w-sm">
      <div className="flex rounded-lg h-full bg-primaryColor p-8 flex-col">
        <div className="flex items-center mb-3">
          <div
            className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-secondaryColor text-white flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-white dark:text-white text-md text-bold font-kumbh">{title}</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-white dark:text-gray-300 font-karla">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;