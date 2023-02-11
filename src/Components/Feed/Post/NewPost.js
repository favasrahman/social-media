import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import React from "react";
import "./NewPost.scss";

function NewPost() {
  return (
    <div className="newPost">
      <form>
        <div className="postInput">
          <Avatar size={64} icon={<UserOutlined />} />
          <input placeholder="What's happening?"></input>
        </div>
        <Button className="postButton">Post</Button>
      </form>
    </div>
  );
}

export default NewPost;
