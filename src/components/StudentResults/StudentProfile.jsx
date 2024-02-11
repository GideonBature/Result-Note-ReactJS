import React from "react";
import elgibbor from '/src/assets/elgibbor.png';

function StudentProfile() {
    return (
        <div className="flex flex-col pt-0 p-8 mr-12 items-center justify-center overflow-hidden">
            {/* profile - picx, name aage, gender, designation etc */}
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
                <h2>About</h2>
                <div className="text-justify font-normal text-xs text-gray-500">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit auctor, magna.
                    </p>
                </div>
            </div>
            <div className="flex mt-2 space-x-32">
                <div className="font-bold text-sm">
                    <h2>Age</h2>
                    <p className="text-gray-500 font-normal text-sm">16</p>
                </div>
                <div className="font-bold text-sm">
                    <h2>Gender</h2>
                    <p className="text-gray-500 font-normal text-sm">Male</p>
                </div>
            </div>
            {/* Static Alvatar */}
            <h2 className="font-bold text-sm mt-3 mb-2 mr-auto">People from the same class</h2>
            <div class="flex mr-auto">
                <img class="border-2 border-white rounded-full h-8 w-8 -mr-3" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                <img class="border-2 border-white rounded-full h-8 w-8 -mr-3" src="https://randomuser.me/api/portraits/women/31.jpg" alt="" />
                <img class="border-2 border-white rounded-full h-8 w-8 -mr-3" src="https://randomuser.me/api/portraits/men/33.jpg" alt="" />
                <img class="border-2 border-white rounded-full h-8 w-8 -mr-3" src="https://randomuser.me/api/portraits/women/32.jpg" alt="" />
                <img class="border-2 border-white rounded-full h-8 w-8 -mr-3" src="https://randomuser.me/api/portraits/men/44.jpg" alt="" />
                <span class="flex items-center justify-center bg-white text-xs text-secondaryColor font-semibold border-2 border-gray-200 rounded-full h-8 w-8">+26</span>
            </div>
        </div>
    );
}

export default StudentProfile;
