import React from 'react';

const Register = () => {
  return (
    <div className="h-screen w-screen flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-kumbh mx-auto">Welcome, create your school account</h2>
      <div className="max-w-xl w-full space-y-8  bg-white m-10 h-auto  p-8 rounded-md mx-auto">
        <p className="mt-6 text-center text-2xl text-gray-500 font-kumbh px-20">It is our great pleasure to have you on board!</p>
        <form className="mt-8 space-y-6 mx-auto text-center px-20" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 sr-only">
              Admin name
            </label>
            <input
              id="admin-name"
              name="admin-name"
              type="text"
              autoComplete="text"
              required
              className="mt-1 p-3 block w-full rounded-md border-gray-300 bg-white border-2 text-gray-900"
              placeholder='Enter the name of Admin'
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 sr-only">
              School name
            </label>
            <input
              id="school-name"
              name="school-name"
              type="text"
              autoComplete="text"
              required
              className="mt-1 p-3 block w-full rounded-md border-gray-300 bg-white border-2 text-gray-900"
              placeholder='Enter the name of the School'
            />
          </div>
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
              placeholder='Enter the School email'
            />
          </div>
        
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
            
          </div>
          <p className='text-center text-gray-800 mt-2'>Already have an account? <a href='login' className='text-btnColor font-bold hover:text-btnHoverColor'>Sign in</a></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
