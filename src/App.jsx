import Layout from "./Components/Layout";
import Contect from "./Pages/Contect";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contectus" element={<Contect />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
