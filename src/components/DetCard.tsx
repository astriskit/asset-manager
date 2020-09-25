import React from "react";
import { Col, Card } from "antd";

export const DetCard: React.FC<{
  children: React.ReactChildren | React.ReactElement;
}> = ({ children }) => (
  <Col>
    <Card
      style={{
        padding: "5px 5px",
        margin: "5px 5px",
        background: "#f2f2f2",
        borderRadius: "6px",
        minWidth: "220px",
      }}
      bodyStyle={{
        padding: "3px 3px",
      }}
    >
      {children}
    </Card>
  </Col>
);
