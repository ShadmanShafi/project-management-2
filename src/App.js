import "./App.css";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/store";
import Layout from "./Layout";
import { PersistGate } from "redux-persist/integration/react";
import FormikContainer from "./Formik/FormikContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate  persistor={persistor}>
          <Layout>
            <Routes />
          </Layout>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
