import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  const user = useAppSelector((state) => state.user);
  console.log("user", user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
