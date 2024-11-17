import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../component';
import Hero from './Hero';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // If no posts are available, show a message to log in
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center bg-transparent"> {/* Transparent background */}
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              {/* <h1 className="text-2xl font-bold text-yellow-200 hover:text-yellow-600">
                Login to read posts
              </h1> */}
              <Hero/>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  // Display posts when available
  return (
    <div className="w-full py-8 bg-transparent"> {/* Transparent background */}
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
