import React from "react";
import { AssetDist } from "./AssetDist";
import { AssetList } from "./AssetList";
import { Data } from "../data";

export const ViewData: React.FC<{ data: Data }> = ({ data }) => (
  <div id="view-data">
    <AssetList assets={data} />
    <AssetDist
      etf={data.filter(({ mf }) => mf).length}
      mf={data.filter(({ mf }) => !mf).length}
    />
  </div>
);
