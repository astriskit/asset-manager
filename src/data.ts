type EmptyNumber = Number | "-";

export interface DataRecord {
  Scrip: string;
  Quantity: EmptyNumber;
  Price: EmptyNumber;
  "Avg. Cost": EmptyNumber;
  "Invested Amount": EmptyNumber;
  "% of Portfolio Value": EmptyNumber;
  "Unrealized P&L": EmptyNumber;
  "% Return": EmptyNumber;
  mf: Boolean;
}

export type Data = Array<DataRecord>;

export const data: Data = [
  {
    Scrip: "AADR",
    Quantity: 430,
    Price: 50.3,
    "Avg. Cost": 41.75,
    "Invested Amount": 17952.07,
    "% of Portfolio Value": 22.06,
    "Unrealized P&L": 3676.93,
    "% Return": 20.48,
    mf: true,
  },
  {
    Scrip: "MFEM",
    Quantity: 210,
    Price: 23.2,
    "Avg. Cost": 22.5,
    "Invested Amount": 4725.84,
    "% of Portfolio Value": 5.81,
    "Unrealized P&L": 146.16,
    "% Return": 3.09,
    mf: true,
  },
  {
    Scrip: "JPEM",
    Quantity: 328,
    Price: 52.5,
    "Avg. Cost": 56.7,
    "Invested Amount": 18597.6,
    "% of Portfolio Value": 22.86,
    "Unrealized P&L": -1377.6,
    "% Return": -7.41,
    mf: true,
  },
  {
    Scrip: "KEMQ",
    Quantity: 801,
    Price: 20.4,
    "Avg. Cost": 22.24,
    "Invested Amount": 17811.04,
    "% of Portfolio Value": 21.89,
    "Unrealized P&L": 3441.34,
    "% Return": 25.0,
    mf: true,
  },
  {
    Scrip: "KLDW",
    Quantity: 523,
    Price: 32.9,
    "Avg. Cost": 26.32,
    "Invested Amount": 13765.36,
    "% of Portfolio Value": 16.92,
    "Unrealized P&L": 3441.34,
    "% Return": 25.0,
    mf: false,
  },
  {
    Scrip: "KOIN",
    Quantity: 335,
    Price: 25.4,
    "Avg. Cost": 25.4,
    "Invested Amount": 8509.0,
    "% of Portfolio Value": 10.46,
    "Unrealized P&L": "-",
    "% Return": 0.0,
    mf: false,
  },
];
