import React from 'react';
import { motion } from 'framer-motion';

const BoardPortrait = ({ img, name, role, desc, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-full aspect-square max-w-[280px] overflow-hidden rounded-full shadow-2xl relative mb-8 border-4 border-white">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
        />
        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] pointer-events-none mix-blend-overlay" />
      </div>
      <h3 className="text-2xl font-serif font-black mb-1 text-slate-900 group-hover:text-brand-accent transition-colors">{name}</h3>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-4">{role}</p>
      <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-[240px]">{desc}</p>
      <div className="w-px h-12 bg-brand-primary/20 mt-6" />
    </motion.div>
  );
};

const Leadership = () => {
  return (
    <section id="leadership" className="pt-32 pb-40 bg-soft overflow-hidden relative">
      
      {/* Decorative Blueprint Background */}
      <div className="absolute inset-0 bg-blueprint-subtle opacity-50" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Principal Message - Architectural Layout */}
        <div id="principal" className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-40">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            {/* Wrapper to bind text precisely to the image */}
            <div className="relative">
              
              {/* Immersive Portrait */}
              <div className="w-[380px] max-w-[85vw] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative border-8 border-white">
                <img 
                  src="/principal_passport.png" 
                  alt="Prof. (Dr) D. N. Pattanayak" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out hover:scale-105" 
                  style={{ objectPosition: 'center 10%' }}
                />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none" />
              </div>
              
              {/* Elegant Name Plate overlapping image */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 md:p-8 shadow-xl max-w-[250px] border-b-4 border-brand-primary">
                <h3 className="text-xl font-black font-serif text-slate-900 leading-tight mb-2">Prof. (Dr) D. N. Pattanayak</h3>
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">Principal</span>
              </div>

            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 pl-0 lg:pl-12 mt-12 lg:mt-0"
          >
            <span className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase mb-8 block flex items-center gap-4">
              <div className="w-12 h-px bg-slate-400" /> LEADERSHIP VOICE
            </span>
            <div className="relative pt-8 md:pt-16 mb-12">
              <span className="text-[120px] md:text-[200px] leading-none font-serif text-brand-primary/5 absolute top-0 left-0 md:-left-10 pointer-events-none select-none">"</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-slate-900 leading-tight relative z-10">
                At Trident, we don't just teach technology; <br />
                <span className="italic text-brand-accent font-light">we cultivate the innovators</span> of tomorrow.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 text-slate-600 text-lg leading-relaxed font-medium">
              <p>
                Our institution stands on the solid foundations of innovation, integrity, and excellence. We believe in providing our students with a holistic environment where world-class infrastructure meets personalized guidance. 
              </p>
              <p>
                We are dedicated to shaping minds that are not only technically proficient but are also responsible global citizens. Join us in our journey of continuous learning and professional growth.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Governing Board Table */}
        <div id="governance" className="mb-20 flex flex-col items-center text-center">
          <span className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase mb-6 block">GOVERNANCE</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-slate-900 mb-8">
            Governing <span className="italic text-brand-primary">Board</span>
          </h2>
          <div className="w-px h-12 bg-brand-primary/30" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_15px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-5 px-6 font-bold text-slate-700 text-sm tracking-wider uppercase whitespace-nowrap w-[80px]">Sl. no</th>
                  <th className="py-5 px-6 font-bold text-slate-700 text-sm tracking-wider uppercase">Members</th>
                  <th className="py-5 px-6 font-bold text-slate-700 text-sm tracking-wider uppercase">Academic background<br/><span className="text-brand-primary">(Technical)</span></th>
                  <th className="py-5 px-6 font-bold text-slate-700 text-sm tracking-wider uppercase">Academic background<br/><span className="text-brand-accent">(Non-technical)</span></th>
                  <th className="py-5 px-6 font-bold text-slate-700 text-sm tracking-wider uppercase">Industry type</th>
                  <th className="py-5 px-6 font-bold text-slate-700 text-sm tracking-wider uppercase">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { id: 1, name: "Smt. S. Panigrahi", role: "Trustee – D. Foundation (Chairperson)", tech: "", nonTech: "M.Sc. (Life Science)", ind: "", oth: "" },
                  { id: 2, name: "Dr. B. K. Nanda", role: "Ex-Vice Chancellor, VSSUT, Burla", tech: "Ph. D (Mechanical)", nonTech: "", ind: "", oth: "" },
                  { id: 3, name: "Sri. K. K. Mishra", role: "Retd. General Manager, Indian Rlys", tech: "B.Tech (Civil), IIT, Kharagpur", nonTech: "", ind: "", oth: "" },
                  { id: 4, name: "Sri S. Mishra", role: "Managing Director, SPARC(p) Ltd.", tech: "B.Tech (Gold Medallist), NIT Kurukhsetra", nonTech: "", ind: "", oth: "" },
                  { id: 5, name: "Prof. (Dr.) Sakuntala Mahapatra", role: "Dean (SoE)", tech: "Ph.D (Electronics)", nonTech: "", ind: "", oth: "" },
                  { id: 6, name: "Prof. (Dr) D. N. Pattanayak", role: "Principal and Member Secretary (GB)", tech: "Ph.D, JU, (Electrical Engg)", nonTech: "", ind: "", oth: "" },
                  { id: 7, name: "Prof. (Dr.) Amarendra Baral", role: "Dean (SSH)", tech: "", nonTech: "Ph.D. (Mathematics)", ind: "", oth: "" },
                  { id: 8, name: "Mr. Ashok Kumar Sarangi", role: "Asst. Professor", tech: "", nonTech: "M.Sc. (Biotechnology)", ind: "", oth: "" },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-brand-primary/[0.02] transition-colors group">
                    <td className="py-5 px-6 text-sm font-semibold text-slate-400 group-hover:text-brand-primary transition-colors">{row.id}</td>
                    <td className="py-5 px-6">
                      <div className="font-bold text-slate-900 mb-1">{row.name}</div>
                      <div className="text-sm font-medium text-slate-500">{row.role}</div>
                    </td>
                    <td className="py-5 px-6 text-sm font-medium text-slate-600">{row.tech || <span className="text-slate-300">-</span>}</td>
                    <td className="py-5 px-6 text-sm font-medium text-slate-600">{row.nonTech || <span className="text-slate-300">-</span>}</td>
                    <td className="py-5 px-6 text-sm font-medium text-slate-600">{row.ind || <span className="text-slate-300">-</span>}</td>
                    <td className="py-5 px-6 text-sm font-medium text-slate-600">{row.oth || <span className="text-slate-300">-</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
