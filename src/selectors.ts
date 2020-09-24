import { DataRecord } from "./data";

export interface Selector<T> {
  (store: {
    app: { loading: boolean; data: DataRecord | []; error: string };
  }): T;
}

export const getData: Selector<DataRecord | []> = (store) => store.app.data;
export const isLoading: Selector<boolean> = (store) => store.app.loading;
export const getErr: Selector<string> = (store) => store.app.error;
