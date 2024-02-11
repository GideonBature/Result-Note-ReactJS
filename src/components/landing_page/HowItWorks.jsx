import React from 'react';

const HowItWorks = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-primaryColor h-screen">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-center mt-10 font-kumbh text-white">How it works</h2>
                <p className='text-center font-karla'>Watch the video below to see how <span className='text-bold'>Result Note</span> works!</p>
            </div>
            <div>
            <iframe width="688" height="387" src="https://www.youtube.com/embed/swipz2RlWgw" title="Transfer Files Between Google Drives Directly, No Upload and Download Needed | Google Drive" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default HowItWorks;