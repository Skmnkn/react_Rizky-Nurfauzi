import "./App.css";
import SetupRouter from "./Router/setupRouter";
import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <SetupRouter />
    </Provider>
  );
}

export default App;
