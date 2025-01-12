import Layout from "./Components/Layout";
import Contect from "./Pages/Contect";
import Home from "./Pages/Home";
import Location from "./Pages/Location";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationPoster from "./Pages/LocationPoster";
import Stations from "./Pages/Stations";
import Services from "./Pages/Services";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Base Layout */}
          <Route path="/" element={<Layout />}>
            {/* Home Page */}
            <Route index element={<Home />} />

            {/* Contact Us Page */}
            <Route path="contactus" element={<Contect />} />

            {/* Location Page */}
            <Route path="location" element={<Location />}>
              {/* Poster Selection */}
              <Route index element={<LocationPoster />} />

              {/* Select Stations */}
              <Route path="stations" element={<Stations />} />

              {/* Select Services */}
              <Route
                path="stations/:stationId/services"
                element={<Services />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
