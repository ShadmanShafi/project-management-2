import "./App.css";
import Routes from "./Routes";
import { MyProvider } from "./ContextStore";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyProvider>
          <Routes />
        </MyProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
