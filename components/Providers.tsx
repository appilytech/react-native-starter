import React, { useState } from "react";

import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";

import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

import { ThemeProvider, Overlay, Text, Button } from "@rneui/themed";
import theme from "@/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState("");

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => setError(error.message),
    }),
  });

  const toggleOverlay = () => {
    setError("");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </ThemeProvider>
      <Overlay isVisible={!!error} onBackdropPress={toggleOverlay}>
        <Text>{error}</Text>
        <Button title="OK" onPress={toggleOverlay} />
      </Overlay>
    </QueryClientProvider>
  );
}
