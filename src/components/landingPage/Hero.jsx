import React from 'react';

const Hero = () => {
 return (
   <div id='home' className="w-screen h-screen -my-20 text-white bg-center bg-cover">
     <div class="container mx-auto flex h-full text-center my-auto items-center justify-center flex-col">
       <div class="text-center lg:w-5/12 w-full flex-col">
         <h1 className="mx-auto text-5xl font-bold leading-tight font-kumbh pt-20">
            Manage your Students Result Easily
         </h1>
         <p className="text-2xl mt-8 font-karla">
            Result Note is a Result Management System that offers each school a personalized portal for result entry and generation for their Students.
         </p>
         <div className="flex justify-center mx-auto mt-8">
           <button
             className="inline-block bg-secondaryColor hover:bg-secondaryHoverColor text-white font-bold rounded-full py-4 px-8 font-karla">
             Get Started
           </button>
         </div>
       </div>
     </div>
   </div >
 );
}

export default Hero;
