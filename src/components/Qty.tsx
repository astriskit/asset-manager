import React from "react";
import { EmptyNumber } from "../data";
import { DetCard } from "./DetCard";

export const Qty: React.FC<{
  quantity: EmptyNumber;
  averageCost: EmptyNumber;
  investedAmount: EmptyNumber;
}> = ({ quantity, averageCost, investedAmount }) => (
  <DetCard>
    <>
      <div className="det-row">
        <span>Quantity</span>
        <span className="number">{quantity}</span>
      </div>
      <div className="det-row">
        <span>Avg. Cost </span>
        <span className="number">{averageCost.toLocaleString()}</span>
      </div>
      <div className="det-row">
        <span>Invested Amt.</span>
        <span className="number">${investedAmount.toLocaleString()}</span>
      </div>
    </>
  </DetCard>
);
