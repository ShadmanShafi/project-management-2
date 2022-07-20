import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { MyProvider } from "./ContextStore";

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
