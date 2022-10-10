import "./App.css";
import SetupRouter from "./Router/setupRouter";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SetupRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
