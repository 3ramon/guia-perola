import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { UserProvider } from "./context/userContext";
import Register from "./pages/Register";
import Places from "./pages/Places";
import PlaceDetails from "./pages/PlaceDetails";
import MapCity from "./pages/MapCity";
import About from "./pages/About";
import { PlaceProvider } from "./context/placeContext";

function App() {
    return (
        <UserProvider>
            <PlaceProvider>
                <BrowserRouter>
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
                    </Routes>
                </BrowserRouter>
            </PlaceProvider>
        </UserProvider>
    );
}

export default App;
