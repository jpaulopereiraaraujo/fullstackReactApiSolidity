import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Faucet from './pages/Faucet'
import VendingMachine from "./pages/VendingMachine";
import CryptoNews from "./pages/CryptoNews"
import Newsapi from "./pages/Newsapi"

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} > </Route>
                <Route path="/faucet" element={<Faucet />} > </Route>
                <Route path="/vendingmachine" element={<VendingMachine />} > </Route>
                <Route path="/cryptonews" element={<CryptoNews />} > </Route>
            </Routes>
        </Router>
    )
}

export default App
