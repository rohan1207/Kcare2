import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Technology from "./pages/Technology";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNotice from "./components/MobileNotice";

import ContactUs from "./pages/ContactUs";
import BookAppointment from "./pages/BookAppointment";

import AboutUs from "./pages/AboutUs";
import DiabeticFootCarePage from "./pages/DiabeticFootCare";
import BreastSurgeryPage from "./pages/BreastSurgery";
import AdvancedThyroidSurgeryPage from "./pages/AdvancedThyroidSurgery";
import LaserFissureTreatmentPage from "./pages/LaserFissureTreatment";
import PilesTreatmentPage from "./pages/PilesTreatment";
import FistulaTreatmentPage from "./pages/FistulaTreatment";
import LaparoscopicAppendectomyPage from "./pages/LaparoscopicAppendectomy";
import RoboticHerniaRepairPage from "./pages/RoboticHerniaRepair";
import GallBladderRemovalPage from "./pages/GallBladderRemoval";
import HydroceleSurgeryPage from "./pages/HydroceleSurgery";
import PilonidalSinusCarePage from "./pages/PilonidalSinusCare";
import RectalProlapseSurgeryPage from "./pages/RectalProlapseSurgery";
import PhimosisTreatmentPage from "./pages/PhimosisTreatment";
import AbscessDrainagePage from "./pages/AbscessDrainage";
import CystRemovalPage from "./pages/CystRemoval";
import BlogsPage from "./pages/Blogs";
import BlogDetailPage from "./pages/BlogDetailPage";
import GalleryPage from "./pages/Gallery";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-stone-900">
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </div>
  );
}

function AppInner() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <Navbar />
      <main className={isHome ? "" : "pt-24 lg:pt-28"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/technology" element={<Technology />} /> */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/services/diabetic-foot-care" element={<DiabeticFootCarePage />} />
          <Route path="/services/breast-surgery" element={<BreastSurgeryPage />} />
          <Route path="/services/advanced-thyroid-surgery" element={<AdvancedThyroidSurgeryPage />} />
          <Route path="/services/laser-fissure-treatment" element={<LaserFissureTreatmentPage />} />
          <Route path="/services/piles-treatment" element={<PilesTreatmentPage />} />
          <Route path="/services/fistula-treatment" element={<FistulaTreatmentPage />} />
          <Route path="/services/laparoscopic-appendectomy" element={<LaparoscopicAppendectomyPage />} />
          <Route path="/services/robotic-hernia-repair" element={<RoboticHerniaRepairPage />} />
          <Route path="/services/gall-bladder-removal" element={<GallBladderRemovalPage />} />
          <Route path="/services/hydrocele-surgery" element={<HydroceleSurgeryPage />} />
          <Route path="/services/pilonidal-sinus-care" element={<PilonidalSinusCarePage />} />
          <Route path="/services/rectal-prolapse-surgery" element={<RectalProlapseSurgeryPage />} />
          <Route path="/services/phimosis-treatment" element={<PhimosisTreatmentPage />} />
          <Route path="/services/abscess-drainage" element={<AbscessDrainagePage />} />
          <Route path="/services/cyst-removal" element={<CystRemovalPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:blogId" element={<BlogDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileNotice />
    </>
  );
}
