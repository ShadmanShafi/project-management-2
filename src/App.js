import "./App.css";
import Routes from "./Routes";
import { MyProvider } from "./ContextStore";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyProvider>
          <Layout>
          <Routes />
          </Layout>
        </MyProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
