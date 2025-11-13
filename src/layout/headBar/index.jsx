import React from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function HeadBar({ collapsed, toggleCollapse }) {
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: `calc(100% - ${collapsed ? 80 : 250}px)`,
        padding: "0 16px",
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div onClick={toggleCollapse} style={{ cursor: "pointer" }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </Header>
  );
}
