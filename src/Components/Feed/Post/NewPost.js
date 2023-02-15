import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import React, { useState } from "react";
import db from "../../../lib/Firebase";
import "./NewPost.scss";

function NewPost() {
  const date = new Date();
  const [newMessage, setNewMessage] = useState('')

  const addPost = event => {
    event.preventDefault();

    db.collection('posts').add({
      displayName: 'John Doe',
      username: 'johndoe',
      verified: true,
      text: newMessage,
      posted: date
    });

    setNewMessage('');
  }

  return (
    <div className="newPost">
      <form>
        <div className="postInput">
          <Avatar size={64} icon={<UserOutlined />} />
          <input
          onChange={event => setNewMessage(event.target.value)}
          value={newMessage}
          placeholder="What's happening?"
          type='text'
          />
        </div>
        <Button onClick={addPost} type="submit" className="postButton">Post</Button>
      </form>
    </div>
  );
}

export default NewPost;
