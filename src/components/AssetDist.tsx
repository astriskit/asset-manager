import React from "react";
import { Progress, Card } from "antd";

interface Props {
  mf: number;
  etf: number;
}
export const AssetDist: React.FC<Props> = ({ mf, etf }) => (
  <Card
    size="small"
    title="Portfolio"
    extra={
      <span style={{ fontSize: "12px", fontWeight: "bold" }}>Asset Wise</span>
    }
    style={{
      flex: 1,
    }}
    bodyStyle={{
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      justifyContent: "space-evenly",
      minHeight: "400px",
    }}
    hoverable
  >
    <Progress
      type="circle"
      percent={(mf / (mf + etf)) * 100}
      trailColor="rgb(174, 156, 70)"
      strokeWidth={15}
      strokeLinecap="square"
      showInfo={false}
      width={160}
    />
    <div
      title="Labels"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#1890ff",
            width: "15px",
            height: "10px",
            marginRight: "10px",
          }}
        ></div>
        <div>Mutual Funds</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "rgb(174 156 70)",
            width: "15px",
            height: "10px",
            marginRight: "10px",
          }}
        ></div>
        <div>ETFs</div>
      </div>
    </div>
  </Card>
);
