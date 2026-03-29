import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/app.css";
import { SiteLayout } from "./layouts/SiteLayout";
import { CalendarPage } from "./pages/CalendarPage";
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
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/clergy" element={<ClergyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/giving/texting" element={<TextingPage />} />
        <Route path="/giving" element={<GivingPage />} />
        <Route path="/texting" element={<Navigate to="/giving/texting" replace />} />
      </Route>
    </Routes>
  );
}
