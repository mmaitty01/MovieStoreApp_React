import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import MovieStore from "./Pages/MovieStore";
import CartPage from "./Pages/CartPage"



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieStore />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
