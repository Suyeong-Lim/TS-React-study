import React from "react";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { getClient } from "./pages/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
  const elements = useRoutes(routes);
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      {elements}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
