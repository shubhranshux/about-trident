import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';

const LibraryPage         = lazy(() => import("./pages/LibraryPage"));
const IQACPage            = lazy(() => import("./pages/IQACPage"));
const DVVPage             = lazy(() => import("./pages/DVVPage"));
const TridentPoliciesPage = lazy(() => import("./pages/TridentPoliciesPage"));
const TestimonialsPage    = lazy(() => import("./pages/TestimonialsPage"));
const StudentClubsPage    = lazy(() => import("./pages/StudentClubsPage"));
const CiscoThingQbatorPage= lazy(() => import("./pages/CiscoThingQbatorPage"));
const GrievancePage       = lazy(() => import("./pages/GrievancePage"));
const ICCPage             = lazy(() => import("./pages/ICCPage"));
const AlumniPage          = lazy(() => import("./pages/AlumniPage"));

const AboutPage              = lazy(() => import("./pages/AboutPage"));
const NAACPage               = lazy(() => import("./pages/NAACPage"));
const NBAPage                = lazy(() => import("./pages/NBAPage"));
const NIRFPage               = lazy(() => import("./pages/NIRFPage"));
const SIROPage               = lazy(() => import("./pages/SIROPage"));
const AICTEDisclosurePage    = lazy(() => import("./pages/AICTEDisclosurePage"));
const CareerPage             = lazy(() => import("./pages/CareerPage"));
const InformationBrochurePage= lazy(() => import("./pages/InformationBrochurePage"));
const BPUTAffiliationPage    = lazy(() => import("./pages/BPUTAffiliationPage"));
const FinancialAuditsPage    = lazy(() => import("./pages/FinancialAuditsPage"));
const AntiRaggingPage        = lazy(() => import("./pages/AntiRaggingPage"));

const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const DisclaimerPage    = lazy(() => import("./pages/DisclaimerPage"));
const TermsOfUsePage    = lazy(() => import("./pages/TermsOfUsePage"));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/iqac" element={<IQACPage />} />
            <Route path="/dvv" element={<DVVPage />} />
            <Route path="/trident-policies" element={<TridentPoliciesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/student-clubs" element={<StudentClubsPage />} />
            <Route path="/cisco-thingqbator" element={<CiscoThingQbatorPage />} />
            <Route path="/grievance" element={<GrievancePage />} />
            <Route path="/icc" element={<ICCPage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/naac" element={<NAACPage />} />
            <Route path="/nba" element={<NBAPage />} />
            <Route path="/nirf" element={<NIRFPage />} />
            <Route path="/siro" element={<SIROPage />} />
            <Route path="/aicte-disclosure" element={<AICTEDisclosurePage />} />
            <Route path="/bput-affiliation" element={<BPUTAffiliationPage />} />
            <Route path="/financial-audits" element={<FinancialAuditsPage />} />
            <Route path="/anti-ragging" element={<AntiRaggingPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/information-brochure" element={<InformationBrochurePage />} />

            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
