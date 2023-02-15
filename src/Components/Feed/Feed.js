import React, { useEffect, useState } from "react";
import "./Feed.scss";
import NewPost from "./post/NewPost";
import Post from "./post/Post";
import db from "../../lib/Firebase";
import { Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";


function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('posted', 'desc').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <Layout>
      <Content>
      <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: "100vh" }}
        >
    <div className="feed">
      {/* Header */}
      <div className="feedHeader">
        <h2>Home</h2>
      </div>

      {/* Box */}
      <NewPost />

      {posts.map((post) => (
        <Post className='post'
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
        />
      ))}
    
    </div>
    </Row>
    </Content>
    </Layout>
  );
}

export default Feed;
