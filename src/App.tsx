import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { SiteLayout } from "./SiteLayout";
import { ClergyPage } from "./pages/ClergyPage";
import { ContactPage } from "./pages/ContactPage";
import { GivingPage } from "./pages/GivingPage";
import { HomePage } from "./pages/HomePage";
import { TextingPage } from "./pages/TextingPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/clergy" element={<ClergyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/giving/texting" element={<TextingPage />} />
        <Route path="/giving" element={<GivingPage />} />
        <Route path="/texting" element={<Navigate to="/giving/texting" replace />} />
      </Route>
    </Routes>
  );
}
