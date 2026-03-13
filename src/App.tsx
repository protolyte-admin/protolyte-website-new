import type { JSX } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import HomePage from "./pages/HomePage";
import RecoSalesPptPage from "./pages/RecoSalesPptPage";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";

function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/casestudies" element={<CaseStudiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/products/recosales/ppt" element={<RecoSalesPptPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

