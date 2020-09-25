import React from "react";
import { AssetItem } from "./AssetItem";
import { Data } from "../data";
import { List } from "antd";

export const AssetList: React.FC<{ assets: Data }> = ({ assets = [] }) => (
  <List
    className="asset-list"
    dataSource={assets}
    renderItem={(item) => <AssetItem asset={item} />}
  />
);
