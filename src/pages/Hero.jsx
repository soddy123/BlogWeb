import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import { useSelector } from 'react-redux'; // To check if the user is authenticated

function Hero() {
  const authStatus = useSelector((state) => state.auth.status); // Check if the user is authenticated

  return (
    <section className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Our Blog!</h1>
        <p className="text-lg text-gray-700 mb-6">
          {authStatus
            ? "You are logged in. Feel free to explore, read, and write amazing posts!"
            : `Welcome to Our Blog Community!

               We're so excited to have you here! Whether you're here to read insightful posts or to share your own stories, ideas, and experiences, you're in the right place.

               This is a space where your thoughts matter. Feel free to express yourself, connect with others, and engage in meaningful conversations. Let your voice be heard, and inspire others along the way.

               Happy writing and exploring! 😊`}
        </p>

        {/* Show buttons based on the authentication status */}
        {!authStatus ? (
          <div className="flex space-x-4">
            <Link to="/login">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/all-posts">
            <button className="px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600">
              Explore Posts
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}

export default Hero;
