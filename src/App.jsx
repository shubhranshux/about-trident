import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SubNav from './components/SubNav';
import StatsCounter from './components/StatsCounter';
import Identity from './components/Identity';
import VisionMission from './components/VisionMission';
import History from './components/History';
import Recognitions from './components/Recognitions';
import Leadership from './components/Leadership';
import Success from './components/Success';
import Compliance from './components/Compliance';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

/*
 * "QUIET LUXURY" EDITORIAL COLOR MAP:
 * A cohesive, sophisticated palette alternating between dark and light,
 * providing high contrast and a true premium magazine feel.
 * 
 * Hero         → #0A0A0A (Onyx)
 * Stats        → #14191F (Navy Charcoal)
 * Identity     → #F5F2EB (Parchment - Light)
 * Vision       → #E3DEC6 (Warm Stone - Light)
 * History      → #F5F2EB (Parchment - Light)
 * Recognitions → #1A1C18 (Deep Forest Charcoal)
 * Leadership   → #F5F2EB (Parchment - Light)
 * Success      → #E3DEC6 (Warm Stone - Light)
 * Compliance   → #0A0A0A (Onyx)
 */

const COLORS = {
  hero: '#0A0A0A',
  stats: '#14191F',
  identity: '#F5F2EB',
  vision: '#E3DEC6',
  history: '#F5F2EB',
  recognitions: '#1A1C18',
  leadership: '#F5F2EB',
  success: '#E3DEC6',
  compliance: '#181C25',
};

function App() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Header />
        <SubNav />
        <main>
          <div id="hero"><Hero /></div>
          <SectionDivider variant="slant" topColor={COLORS.hero} bottomColor={COLORS.stats} height={100} />

          <div id="stats-counter"><StatsCounter /></div>
          <SectionDivider variant="wave" topColor={COLORS.stats} bottomColor={COLORS.identity} height={120} />

          <div id="identity"><Identity /></div>
          <SectionDivider variant="slant" topColor={COLORS.identity} bottomColor={COLORS.vision} height={100} flip />

          <div id="vision-mission"><VisionMission /></div>
          <SectionDivider variant="wave" topColor={COLORS.vision} bottomColor={COLORS.history} height={120} />

          <div id="milestones"><History /></div>
          <SectionDivider variant="slant" topColor={COLORS.history} bottomColor={COLORS.recognitions} height={100} />

          <div id="academics"><Recognitions /></div>
          <SectionDivider variant="wave" topColor={COLORS.recognitions} bottomColor={COLORS.leadership} height={120} flip />

          <div id="leadership"><Leadership /></div>
          <SectionDivider variant="slant" topColor={COLORS.leadership} bottomColor={COLORS.success} height={100} />

          <div id="success"><Success /></div>
          <SectionDivider variant="wave" topColor={COLORS.success} bottomColor={COLORS.compliance} height={120} />

          <div id="compliance"><Compliance /></div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
