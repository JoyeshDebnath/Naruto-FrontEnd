import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/nav";
import KagePage from "./components/KagePage";
import AkatskiPage from "./components/AkatskiPage";
import Terminology from "./components/Terminology";
//imports

function App() {
	return (
		<div className="App">
			<NavBar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/kage" element={<KagePage />}></Route>
					<Route path="/Akatski" element={<AkatskiPage />}></Route>
					<Route path="/terms" element={<Terminology />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
