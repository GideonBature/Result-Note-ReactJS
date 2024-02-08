import React from 'react';

const Footer = () => {
    return (
        <div class="bg-primaryColor h-screen text-white">
            <div class="max-w-screen-xl mx-auto px-4 sm:px-6  text-gray-800 flex flex-wrap justify-around">
                <div class="p-5">
                    <div class="text-xs uppercase text-gray-500 font-medium">Home</div>
                    <a class="my-3 block" href="/#">Services <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="my-3 block" href="/#">Products <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="my-3 block" href="/#">About Us <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="my-3 block" href="/#">Pricing <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="my-3 block" href="/#">Partners <span class="text-teal-600 text-xs p-1">New</span>
                    </a>
                </div>
                <div class="p-5">
                    <div class="text-xs uppercase text-gray-500 font-medium">Resources</div>

                    <a class="my-3 block" href="/#">Documentation <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="my-3 block" href="/#">Tutorials <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1">New</span>
                    </a>
                </div>
                <div class="p-5">
                    <div class="text-xs uppercase text-gray-500 font-medium">Support</div>

                    <a class="my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                    <a class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                </div>
                <div class="p-5">
                    <div class="text-xs uppercase text-gray-500 font-medium">Contact us</div>

                    <a class="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA
                        <span class="text-teal-600 text-xs p-1"></span>
                    </a>

                    <a class="my-3 block" href="/#">contact@company.com
                        <span class="text-teal-600 text-xs p-1"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;