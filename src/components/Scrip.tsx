import React from "react";
import { EmptyNumber } from "../data";
import { DetCard } from "./DetCard";

export const Scrip: React.FC<{ name: string; price: EmptyNumber }> = ({
  name,
  price,
}) => (
  <DetCard>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: "150px",
        maxWidth: "200px",
        overflow: "auto",
      }}
    >
      <div
        style={{ fontWeight: "bold", marginRight: "5px", cursor: "pointer" }}
      >
        ☰
      </div>
      <div style={{ marginRight: "5px" }}>
        <div
          className="subtle"
          style={{ fontWeight: "bold", fontSize: "12px" }}
        >
          {name}
        </div>
        <div style={{ color: "#00b7ff", fontWeight: "bold", fontSize: "16px" }}>
          ${price.toLocaleString()}
        </div>
      </div>
      <div style={{ marginRight: "5px" }}>
        <div
          style={{ color: "#a8bd84", fontWeight: "bolder", fontSize: "12px" }}
        >
          iShares
        </div>
        <div style={{ fontSize: "8px" }}>by BlackDoc</div>
        <div style={{ fontWeight: "bolder", fontSize: "12px" }}>
          S&P 500 Index
        </div>
        <div style={{ fontSize: "10px" }}>US Equity</div>
      </div>
    </div>
  </DetCard>
);
