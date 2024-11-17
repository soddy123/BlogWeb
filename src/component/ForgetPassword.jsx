import React, { useState } from 'react';
import appwriteService from '../appwrite/config';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await appwriteService.account.createRecovery(email, 'http://localhost:5173/reset-password');
      setMessage('Password recovery email sent!');
    } catch (error) {
      setMessage('Error sending recovery email.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Forgot Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        {/* Displaying message with conditional styling */}
        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes('Error') ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
