import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

// {} is used to pass props
function PostCard({ $id, title, featureImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full h-64 overflow-hidden mb-4'> {/* Fixed height for consistent card size */}
          {/* Dynamically pass the image source */}
          <img
            src={appwriteService.getFilePreview(featureImage)}
            alt={title}
            className='w-full h-full object-cover rounded-xl'  // Ensures uniform image display without stretching
          />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
