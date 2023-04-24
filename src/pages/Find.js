import React from 'react';
import Navbar from '../components/Navbar';

function Find() {
  return (
    <div className="Find">
      <Navbar />
      <header className="relative h-screen bg-black">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-4xl font-bold text-white">Find</h1>
          <p className="text-lg mb-8 text-white">Find your comfortable and best places to travel in Thailand for you</p>
          <button className="px-8 py-2 bg-yellow-500 rounded-md text-white font-medium hover:bg-yellow-600">Click to Find</button>
        </div>
      </header>
    </div>
  );
}

export default Find;
