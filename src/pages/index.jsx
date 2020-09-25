import React from "react";
import { connect } from "react-redux";
import { Loader } from "../components/Loader";
import { ViewData } from "../components/ViewData";
import { Error as ErrorHandler } from "../components/Error";
import { getData } from "../actions";

// interface AppState {
//   loading: boolean;
//   error: string;
//   data: DataRecord | [];
// }

const Home = ({ loading, error, data, handleReload }) => {
  if (error) {
    return <ErrorHandler error={error} onReload={handleReload} />;
  } else if (loading) {
    return <Loader />;
  }
  return <ViewData data={data} />;
};

const mapStateToProps = (store) => ({ ...store.app });
const mapDispatchToProps = (dispatch) => ({
  handleReload: () => dispatch(getData()),
});

export const ActiveHome = connect(mapStateToProps, mapDispatchToProps)(Home);
