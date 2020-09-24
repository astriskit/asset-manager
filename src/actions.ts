import { createAction } from "@reduxjs/toolkit";
import { DataRecord } from "./data";

export const loading = createAction<boolean>("app/loading");

export const setData = createAction<DataRecord>("app/data/set");

export const getData = createAction("app/data/get");

export const setErr = createAction<string>("app/error");
