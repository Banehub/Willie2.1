import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Searchbar from "./components/Searchbar";
import Table from "./components/Table";
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

