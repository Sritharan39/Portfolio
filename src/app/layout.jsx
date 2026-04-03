import "./globals.css";

export const metadata = {
  title: "Sritharan — Software Developer & LIMS Specialist",
  description: "Portfolio of Sritharan, Software Developer at UST Global India specializing in SampleManager LIMS, lab workflow automation, and full-stack development.",
  keywords: ["LIMS", "SampleManager", "Software Developer", "React", "Next.js", "UST Global"],
  authors: [{ name: "Sritharan" }],
  openGraph: {
    title: "Sritharan — Software Developer",
    description: "LIMS Specialist · SampleManager · UST Global India",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        <div className="scan-line" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
