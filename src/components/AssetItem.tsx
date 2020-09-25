import React from "react";
import { Row, Col, Card, Button } from "antd";
import { DataRecord } from "../data";
import { Scrip } from "./Scrip";
import { Qty } from "./Qty";
import { MktVal } from "./MktVal";
import { UnRealisedPL } from "./UnRealisedPL";

export const AssetItem: React.FC<{ asset: DataRecord }> = ({ asset }) => {
  const scripName = asset.Scrip;
  const qty = asset.Quantity;
  const price = asset.Price;
  const invAmt = asset["Invested Amount"];
  const avgCost = asset["Avg. Cost"];
  const marketValue =
    !isNaN(Number(price)) && !isNaN(Number(price))
      ? Number(price) * Number(qty)
      : "-";
  const portVal = asset["% of Portfolio Value"];
  const unPL = asset["Unrealized P&L"];
  const perRet = asset["% Return"];

  return (
    <Card
      bodyStyle={{
        padding: "5px 5px",
        margin: "0px",
        display: "flex",
      }}
      style={{
        borderRadius: "6px",
        margin: "5px 5px",
      }}
    >
      <Row>
        <Scrip name={scripName} price={price} />
        <Qty quantity={qty} averageCost={avgCost} investedAmount={invAmt} />
        <MktVal value={marketValue} portfolioShare={portVal} />
        <UnRealisedPL value={unPL} returnShare={perRet} />
        <Col className="bs-col">
          <Button
            style={{
              marginBottom: "5px",
            }}
            className="bs-btn"
            size="small"
          >
            BUY
          </Button>
          <Button className="bs-btn" size="small">
            SELL
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
