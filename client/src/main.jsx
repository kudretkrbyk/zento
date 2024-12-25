import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux"; // Redux Provider
import { store } from "./app/store"; // Redux store
import "./index.css";
import App from "./App.jsx";

// React-Query Client Oluşturma
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Redux Provider ile Redux Store'u sağlayın */}
    <Provider store={store}>
      {/* React-Query Client Provider ile React-Query'yi sağlayın */}
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
