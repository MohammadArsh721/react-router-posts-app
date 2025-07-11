import React, { useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    // Load 5 more posts each click
    setPosts(prev => [...prev, ...data.slice(prev.length, prev.length + 5)]);
  };

  return (
    <div>
      <h2>📝 Posts</h2>
      <button onClick={fetchPosts}>Fetch Posts</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
