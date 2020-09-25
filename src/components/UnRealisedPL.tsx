import React from "react";
import { Progress } from "antd";
import { DetCard } from "./DetCard";
import { EmptyNumber } from "../data";

const isNeg = (val: number): boolean => val < 0;
const positive = (val: number): number => (isNeg(val) ? -val : val);

const Arrow: React.FC<{ up: boolean }> = ({ up = true }) =>
  up ? (
    <span style={{ color: "#52c41a" }}>▲</span>
  ) : (
    <span style={{ color: "#ed494c" }}>▼</span>
  );

export const UnRealisedPL: React.FC<{
  value: EmptyNumber;
  returnShare: EmptyNumber;
}> = ({ value, returnShare }) => {
  const rShareNumber = Number(returnShare);

  const retShare = isNaN(rShareNumber) ? "-" : positive(rShareNumber);

  const profit = isNaN(rShareNumber)
    ? undefined
    : isNeg(rShareNumber)
    ? false
    : true;

  return (
    <DetCard>
      <>
        <div className="det-row">
          <span className="number">Unrealised P/L</span>
          <span className="number">
            {Number(value) ? positive(Number(value)) : "-"}
          </span>
        </div>
        <div className="det-row">
          <span className="subtle">% Return</span>
          <span className="number">
            {retShare !== "-" && retShare !== 0 && (
              <>
                <Arrow up={Boolean(profit)} />
                &nbsp;
              </>
            )}
            {retShare}%
          </span>
        </div>
        <div className="double-progress">
          <Progress
            percent={isNaN(rShareNumber) || profit ? 0 : positive(rShareNumber)}
            showInfo={false}
            status="exception"
            trailColor="rgb(204 204 204)"
          />
          <Progress
            percent={isNaN(rShareNumber) || !profit ? 0 : rShareNumber}
            showInfo={false}
            status="success"
            trailColor="rgb(204 204 204)"
          />
        </div>
      </>
    </DetCard>
  );
};
