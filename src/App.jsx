import Layout from "./Components/Layout";
import Contect from "./Pages/Contect";
import Home from "./Pages/Home";
import Location from "./Pages/Location";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationPoster from "./Pages/LocationPoster";
import Stations from "./Pages/Stations";
import Services from "./Pages/Services";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./Login/ProtectedRoute";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import Payment from "./Pages/Payment";
import CarDetails from "./Pages/CarDetails";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Register from "./Pages/Registration";
import ProtectedWraper from "./Components/ProtectedWraper";
import { Toaster } from "react-hot-toast";
import UserLanding from "./Pages/UserLanding";
gsap.registerPlugin(useGSAP);
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {/* Base Layout */}
            <Route path="/" element={<Layout />}>
              {/* Home Page */}
              <Route index element={<Home />} />

              {/* Contact Us Page */}
              <Route path="contectus" element={<Contect />} />

              {/* Location Page */}
              <Route path="location" element={<Location />}>
                {/* Poster Selection */}
                <Route index element={<LocationPoster />} />

                {/* Select Stations */}
                <Route path="stations/:cityName" element={<Stations />} />

                {/* Select Services */}
                <Route
                  path="stations/:cityName/:stationId/services"
                  element={<Services />}
                />
                {/* registration */}
                <Route
                  path="stations/:cityName/:stationId/services/:packageId/register"
                  element={<Register />}
                />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route
                path="/cardetails"
                element={
                  <ProtectedRoute>
                    <ProtectedWraper />
                  </ProtectedRoute>
                }
              >
                <Route index element={<UserLanding />} />
                <Route path="newcar" element={<CarDetails />} />
                <Route path="payment" element={<Payment />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}
export default App;
