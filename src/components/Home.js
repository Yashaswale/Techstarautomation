'use client';

import React from 'react';
import { FlipWords } from "./ui/flip-words";

const Home = () => {
    const words = ["Smarter", "Faster", "Efficient", "Seamless Solutions."];
    return (
        <div section id="Home" className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
            {/* Video Background */}
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover z-0" 
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src="/Videos/HomeVid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay on the Left */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-black/90 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 flex h-[calc(100vh-80px)]">
                <div className="w-full lg:w-3/5 flex flex-col justify-center lg:px-16 px-4">
                    <h1 className="text-4xl lg:text-[3.5rem] font-bold leading-tight mb-4">
                        We Automate <br />
                        <FlipWords words={words} /> <br />
                    </h1>
                    <h2 className="text-xl lg:text-2xl text-gray-200 mb-8">
                        Revolutionizing Automation Solutions
                    </h2>
                    <p className="text-gray-400 text-base lg:text-lg mb-8 max-w-[500px]">
                        Welcome to Tech Start, where we redefine automation through cutting-edge technology and innovative solutions. Join us on a journey to streamline processes and enhance efficiency.
                    </p>
                    <button className="bg-white text-black font-medium px-8 py-3 rounded-full w-fit hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
