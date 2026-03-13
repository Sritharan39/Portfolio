import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  if (!portfolioData.featureFlags.showCertifications && portfolioData.certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-24 bg-[#0A0F1E]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#3B82F6] text-sm tracking-widest uppercase mb-3">
            // 06. Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4FF] tracking-tight">
            Certifications
          </h2>
        </div>

        {portfolioData.certifications.length === 0 ? (
          <div className="p-8 rounded-xl bg-[#131D35] border border-[#1E2D4A] text-center">
            <p className="text-[#94A3B8]">Certifications coming soon...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className="p-6 rounded-xl bg-[#131D35] border border-[#1E2D4A] hover:border-[#3B82F6]/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#F0F4FF] mb-1">{cert.name}</h3>
                <p className="text-[#06B6D4] text-sm mb-2">{cert.issuer}</p>
                <p className="text-[#94A3B8] text-xs font-mono">{cert.date}</p>
                {cert.credentialUrl && (
                  <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="inline-block mt-3 text-xs font-mono text-[#3B82F6] hover:text-[#06B6D4] transition-colors">
                    View Credential →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
