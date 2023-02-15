import {
  DesktopOutlined,
  PieChartOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useLogout } from "hooks/Auth";
import React, { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;

const getItem = (label, key, icon) => {
  return {
    key,
    icon,
    label,
  };
};

const items = [
  getItem("Home", "1", <PieChartOutlined />),
  getItem("Messages", "2", <DesktopOutlined />),
  getItem("Logout", "3", <UserOutlined />),
];

const Sidenav = () => {
    const {logout} = useLogout();

    function handleClick(item) {
        if (item.key === '3') {
            logout();
        }
    }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
          onClick= {handleClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidenav;
