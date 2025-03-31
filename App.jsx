import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import HelloWorld from "./helloworld";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/hello" element={<HelloWorld />} />
      </Routes>
    </Router>
  );
}

export default App;
