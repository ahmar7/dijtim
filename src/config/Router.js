import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boliger from "../pages/Boliger";
import BoligerDetail from "../pages/BoligerDetail";
import Galleri from "../pages/Galleri";
import Home from "../pages/Home";
import Kontakt from "../pages/Kontakt";
import Maeglere from "../pages/Maeglere";
import Nyheder from "../pages/Nyheder";
import NyhederDetail from "../pages/NyhederDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="boligerdetail" element={<BoligerDetail />} />
        <Route path="boliger" element={<Boliger />} />
        <Route path="galleri" element={<Galleri />} />
        <Route path="nyheder" element={<Nyheder />} />
        <Route path="nyhederdetail" element={<NyhederDetail />} />
        <Route path="maeglere" element={<Maeglere />} />
        <Route path="kontakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
  );
}
