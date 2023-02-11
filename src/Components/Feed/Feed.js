import React, { useEffect, useState } from "react";
import "./Feed.scss";
import NewPost from "./Post/NewPost";
import Post from "./Post/Post";
import db from "../../Firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feedHeader">
        <h2>Home</h2>
      </div>

      {/* Box */}
      <NewPost />

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
