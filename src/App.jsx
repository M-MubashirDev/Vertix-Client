import Layout from "./Components/Layout";
import Contect from "./Pages/Contect";
import Home from "./Pages/Home";
import Location from "./Pages/Location";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contectus" element={<Contect />} />
            <Route path="location" element={<Location />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
