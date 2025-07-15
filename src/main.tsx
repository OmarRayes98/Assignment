import { createRoot } from "react-dom/client";
import "@/assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./routes";
import { Provider } from "react-redux";
import store , { persister } from "./store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
