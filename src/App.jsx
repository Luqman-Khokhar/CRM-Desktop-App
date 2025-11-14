import React, { useState } from "react";
import { Layout } from "antd";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SettingsPage from "./pages/Settings";
import Sidebar from "./layout/sideBar";
import HeadBar from "./layout/headBar";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <Router>
      <Layout style={{ minHeight: "100vh", minWidth: "100vw" }}>
        <Sidebar collapsed={collapsed} />

        <Layout
          style={{
            marginLeft: collapsed ? 80 : 250,
            transition: "margin-left 0.2s",
            minHeight: "100vh",
          }}
        >
          <HeadBar collapsed={collapsed} toggleCollapse={toggleCollapse} />

          <Layout.Content
            style={{
              marginTop: 64,
              padding: 24,
              flex: 1,
              overflowY: "auto",
              backgroundColor: "#f0f2f5",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  );
}
