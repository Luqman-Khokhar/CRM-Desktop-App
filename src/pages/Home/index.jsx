import React from "react";
import { Card, Row, Col, Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        flex: 1, // grow to fill parent
        width: "100%",
      }}
    >
      {/* Hero Section - full width */}
      <Card
        style={{
          width: "100%",
          background: "#fafafa",
          borderRadius: 8,
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <Title level={2}>Welcome to the Dashboard</Title>
        <Paragraph>
          This is your homepage. All your quick stats and navigation can go here.
        </Paragraph>
        <Button type="primary" size="large">
          Get Started
        </Button>
      </Card>

      {/* Full-width responsive grid */}
      <Row gutter={[24, 24]} style={{ width: "100%" }}>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ width: "100%" }} title="Card 1" bordered={false}>
            Some content here.
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ width: "100%" }} title="Card 2" bordered={false}>
            Some content here.
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ width: "100%" }} title="Card 3" bordered={false}>
            Some content here.
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
