import React from "react";
import elgibbor from '/src/assets/elgibbor.png';

function StudentProfile() {
    return (
        <div className="p-4 -mt-52 mr-10 flex flex-col items-center justify-center">
            {/* profile picx, name and designation */}
            <img className="h-36 w-40 rounded-full mb-2" src={elgibbor} alt="" />
            <div className="text-base font-semibold">Chiagoziem Elgibbor</div>
            <div className="text-gray-500 text-sm font-normal">Software Engr.</div>
            <div className="flex mt-1">
                <i className='bx bxs-graduation m-2 mr-1 px-1 py-0 text-xl text-gray-500 bg-gray-200 rounded-md'></i>
                <i className='bx bx-phone-call m-2 mr-1 px-1 py-0 text-xl bg-gray-200 text-gray-500 rounded-md'></i>
                <i className='bx bx-envelope m-2 px-1 py-0 text-xl bg-gray-200 text-gray-500 rounded-md'></i>
            </div>
            {/* Edit and delete button */}
            <div className="flex mt-2">
                <button className="bg-secondaryColor rounded-md text-white text-sm font-normal p-1 mr-2 w-20">Edit</button>
                <button className="bg-red-500 rounded-md text-white text-sm font-normal p-1 ml-2 w-20">Delete</button>
            </div>
            {/* About Section */}
            <div className="mr-auto mt-3 font-bold text-sm max-w-52">
                <h1>About</h1>
                <div className="text-justify font-normal text-xs text-gray-500">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit auctor, magna.
                    </p>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default StudentProfile;
