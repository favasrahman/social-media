import React from "react";
import "./Sidebar.scss";
import {
  HomeFilled,
  SearchOutlined,
  NotificationOutlined,
  MailOutlined,
  UserOutlined,
  BookOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import SidebarTab from "./SidebarTab";
import { Button } from "antd";

function Sidebar() {
  return (
    <div className="sideBar">
      <SidebarTab active Icon={HomeFilled} text="Home" />
      <SidebarTab Icon={SearchOutlined} text="Explore" />
      <SidebarTab Icon={NotificationOutlined} text="Notifications" />
      <SidebarTab Icon={MailOutlined} text="Messages" />
      <SidebarTab Icon={BookOutlined} text="Bookmarks" />
      <SidebarTab Icon={UserOutlined} text="Profile" />
      <SidebarTab Icon={MoreOutlined} text="More" />

      <Button className="postButton" block>
        Post
      </Button>
    </div>
  );
}

export default Sidebar;
