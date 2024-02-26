import React from 'react';

const Signup = () => {
  return (
    <div id='signup' className='bg-white h-screen flex flex-col justify-center items-center space-y-10'>
      <h2 className='text-3xl font-bold text-center font-kumbh text-primaryColor'>Sign up</h2>
      <p className='text-xl text-center font-karla font-bold text-primaryColor'>Sign up your School today, it is free!</p>
      <p className='text-center font-kumbh font-normal text-primaryColor mx-40'>Effortlessly manage your school students’ results. Sign up now and enjoy powerful features such as Automated grading, Customizable reports, and Real-time performance tracking. Get started in no time with our user-friendly interface and expert support team. Join today for hassle-free result management.</p>
      <button className='inline-block bg-secondaryColor hover:bg-secondaryHoverColor text-white font-bold rounded-full py-4 px-8 font-karla'>Sign up for Free</button>
    </div>
  );
};

export default Signup;