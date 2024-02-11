// File: /home/bene/Desktop/ResultNote/Result-Note-ReactJS/src/components/login/Login.jsx

import React from 'react';

const Login = () => {
  return (
    <div className="h-screen w-screen flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-kumbh mx-auto">Welcome, Log in to your account</h2>
      <div className="max-w-xl w-full space-y-8  bg-white m-10 h-auto  p-8 rounded-md mx-auto">
        <p className="mt-6 text-center text-2xl text-gray-500 font-kumbh px-20">It is our great pleasure to have you on board!</p>
        <form className="mt-8 space-y-6 mx-auto text-center px-20" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 p-3 block w-full rounded-md border-gray-300 bg-white border-2 text-gray-900"
              placeholder='Enter the Email of school'
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900 sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 p-3 block w-full rounded-md border-gray-300 bg-white border-2 text-gray-900"
              placeholder='Enter Password'
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
            
          </div>
          <p className='text-center text-gray-800 mt-2'>Don't have an account? <a href='register' className='text-btnColor font-bold hover:text-btnHoverColor'>Sign up</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;