import { portfolioData } from "../data/portfolioData";
import { FiAward, FiExternalLink, FiCalendar } from "react-icons/fi";

export default function Certifications() {
  if (!portfolioData.featureFlags.showCertifications && portfolioData.certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-24 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-[#7C3AED] text-xs tracking-widest uppercase mb-3">// 06. Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] tracking-tight">Certifications</h2>
        </div>
        {portfolioData.certifications.length === 0 ? (
          <div className="p-8 rounded-xl bg-[#18181B] border border-[#27272A] text-center">
            <FiAward size={32} className="text-[#27272A] mx-auto mb-3" />
            <p className="text-[#52525B] font-mono text-sm">Certifications coming soon...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className="p-6 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#7C3AED]/50 hover:shadow-glow transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center flex-shrink-0">
                    <FiAward size={18} className="text-[#7C3AED]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#FAFAFA] mb-1">{cert.name}</h3>
                    <p className="text-[#A78BFA] text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-1.5 text-[#A1A1AA] text-xs font-mono mb-3">
                      <FiCalendar size={11} /> {cert.date}
                    </div>
                    {cert.credentialUrl && (
                      <a href={cert.credentialUrl} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono text-[#7C3AED] hover:text-[#A78BFA] transition-colors">
                        <FiExternalLink size={12} /> View Credential
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
