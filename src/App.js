import "./App.css";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/store";
import Layout from "./Layout";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorBoundary } from "./Components/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Layout>
              <ErrorBoundary>
                <Routes />
              </ErrorBoundary>
            </Layout>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
