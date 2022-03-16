import React from "react";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { getClient } from "./queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import Gnb from "./components/gnb";

const App = () => {
  const elements = useRoutes(routes);
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Gnb />
      {elements}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
