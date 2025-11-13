import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, TeamOutlined, FileOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar({ collapsed }) {
  const location = useLocation();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      width={250}
      style={{
        overflowY: "auto",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        height: "100vh",
      }}
    >
      <div
        className="logo"
        style={{ color: "white", padding: "16px", textAlign: "center" }}
      >
        {collapsed ? "CRM" : "CRM Dashboard"}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/" icon={<UserOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/about" icon={<TeamOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="/settings" icon={<FileOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
