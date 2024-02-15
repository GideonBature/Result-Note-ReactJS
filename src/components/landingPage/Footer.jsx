import React from 'react';
import EmailBar from '../card/EmailBar';

const Footer = () => {
    return (
        <div id='footer' class="bg-primaryColor h-screen text-white flex flex-col justify-around items-center">
            <div class="px-4 sm:px-6 lg:px-8 flex flex-wrap justify-around w-5/6">
                <div class="p-5">
                    <div class="uppercase text-white font-karla font-bold">Navigation</div>
                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#">Home <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#Features">Features <span class="text-secondaryColor text-xs p-1">New</span>
                    </a>
                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#">How it works <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#">Sign up <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#">Login <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                </div>
                <div class="p-5">
                    <div class="uppercase text-white font-karla font-bold">Others</div>

                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#">About <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#">Privacy <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#">Security <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#">Terms <span class="text-secondaryColor text-xs p-1">New</span>
                    </a>
                </div>
                <div class="p-5">
                    <div class="uppercase text-white font-karla font-bold">Our Socials</div>

                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#">LinkedIn <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#">Twitter <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#">Facebook <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="text-s my-3 block font-karla font-regular text-gray-400" href="/#">Discord <span class="text-secondaryColor text-xs p-1">New</span>
                    </a>
                </div>
                <div class="p-5">
                    <div class="uppercase text-white font-karla font-bold">Contact us</div>
                    <p className='text-s my-3 block font-karla font-regular text-gray-400'>Want to book a session with us?</p>

                    <EmailBar />
                </div>
            </div>
        </div>
    )
}

export default Footer;