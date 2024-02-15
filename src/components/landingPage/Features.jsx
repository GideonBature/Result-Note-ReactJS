import React from "react";
import Card from '../card/Card';

const Features = () => {
    return (
        <div id="features" className="flex flex-col justify-center items-center bg-white h-screen">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-center mt-10 font-kumbh text-black">Features</h2>
            </div>
            <div className="flex space-x-10 mb-10">
                <Card
                    title="PERSONALISED ACCOUNT"
                    text="Each School gets its own unique Account, making it easy to access and share their results with their students as well as the students’ parents/guadians."     
                    />
                <Card
                    title="FAST AND EFFICIENT"
                    text="Streamlines the process of result recording, publishing, creation and checking all in one place, making it faster and more efficient than traditional methods." 
                    />
                <Card
                    title="SECURE"
                    text="Protect Sensitive Student data with advanced security measures." 
                    />
                </div>
            <div className="flex space-x-10">
                <Card
                    title="CUSTOMIZABLE"
                    text="Schools can customize the platform to fit their unique needs and preferences."     
                    />
                <Card
                    title="RELIABLE"
                    text="Provides accurate and up-to-date results for students and parents." 
                    />
                <Card
                    title="EASY TO USE"
                    text="A simple and intuitive interface that anyone can use." 
                    />
            </div>
        </div>

    )
}

export default Features;