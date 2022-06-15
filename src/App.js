import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./pages/Pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Pages />
      </Router>
      <ToastContainer theme="light" autoClose={2500} />
    </div>
  );
}

export default App;
