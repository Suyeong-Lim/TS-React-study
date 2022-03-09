import React, { Fragment } from "react";
import Router from "./Router";
import GlobalStyle from "./GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </Fragment>
  );
}

export default App;
