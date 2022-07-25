import "./App.css";
import Routes from "./Routes";
import { MyProvider } from "./ContextStore";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <MyProvider>
        <Layout>
          <Routes />
        </Layout>
      </MyProvider>
    </div>
  );
}

export default App;
