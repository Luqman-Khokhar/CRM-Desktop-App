import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Layout style={{ minHeight: "100vh",minWidth:'100vw'  }}>
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} />

        {/* Main layout with margin for sidebar */}
        <Layout
          style={{
            marginLeft: collapsed ? 80 : 250,
            transition: "margin-left 0.2s",
            minHeight: "100vh",
          }}
        >
          {/* HeadBar */}
          <HeadBar collapsed={collapsed} toggleCollapse={toggleCollapse} />

          {/* Content */}
          <Layout.Content
            style={{
              marginTop: 64, // space for HeadBar
              padding: 24,
              flex: 1, // make it grow to fill remaining vertical space
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
