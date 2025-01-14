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
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {/* Base Layout */}
            <Route path="login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
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
                  path="stations/:cityName/:serviceId/services"
                  element={<Services />}
                />
                <Route
                  path="stations/:cityName/services/payment"
                  element={<Payment />}
                />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
export default App;
