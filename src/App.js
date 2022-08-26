import "./App.css";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <Routes />
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
