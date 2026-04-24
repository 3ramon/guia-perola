import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Places from "./pages/Places";
import PlaceDetails from "./pages/PlaceDetails";
import MapCity from "./pages/MapCity";
import About from "./pages/About";
import { PlaceProvider } from "./context/placeContext";
import NavBar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
    return (
            <PlaceProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/Register" element={<Register />} />
                        <Route path="/Places" element={<Places />} />
                        <Route
                            path="/PlaceDetails"
                            element={<PlaceDetails />}
                        />
                        <Route path="/MapCity" element={<MapCity />} />
                        <Route path="/About" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </PlaceProvider>
    );
}

export default App;
