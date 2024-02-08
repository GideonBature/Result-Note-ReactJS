import React from "react";

const EmailBar = () => {
    return (
        <form className="mt-10 py-1 px-4 rounded-lg bg-gray-50 border flex focus-within:border-gray-300">
            <input type="text" placeholder="For free consultation" className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0" name="topic" />
                <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 bg-secondaryColor hover:bg-secondaryHoverColor text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3 text-sm" >Get Started
                </button>
        </form>
    )
}

export default EmailBar;