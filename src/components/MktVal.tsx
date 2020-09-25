import React from "react";
import { Progress } from "antd";
import { EmptyNumber } from "../data";
import { DetCard } from "./DetCard";

export const MktVal: React.FC<{
  value: EmptyNumber;
  portfolioShare: EmptyNumber;
}> = ({ value, portfolioShare }) => (
  <DetCard>
    <>
      <div className="det-row">
        <span className="number">Market Value</span>
        <span className="number">${value.toLocaleString()}</span>
      </div>
      <div className="det-row">
        <span className="subtle">% of portfolio value</span>
        <span className="number">{portfolioShare}%</span>
      </div>
      <div>
        <Progress
          percent={Number(portfolioShare)}
          showInfo={false}
          status="success"
          trailColor="rgb(204 204 204)"
        />
      </div>
    </>
  </DetCard>
);
