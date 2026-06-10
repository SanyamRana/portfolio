import type { Metadata, Viewport } from "next";
import "./globals.css";
import CanvasBackground from "@/components/ui/CanvasBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export const metadata: Metadata = {
  title: "Sanyam Rana | From Circuits to Intelligence | AI/ML Portfolio",
  description:
    "Portfolio of Sanyam Rana, B.Tech Electrical Engineering student at IIT Jodhpur, specializing in Artificial Intelligence, Machine Learning, Data Science, and applied AI systems.",
  keywords: [
    "Sanyam Rana",
    "IIT Jodhpur",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Artificial Intelligence",
    "Machine Learning",
    "Amazon ML Summer School",
    "Software Developer",
    "Electrical Engineering",
    "RAG",
    "Deep Learning",
  ],
  authors: [{ name: "Sanyam Rana" }],
  openGraph: {
    title: "Sanyam Rana | From Circuits to Intelligence",
    description:
      "B.Tech Electrical Engineering student at IIT Jodhpur transitioning into Artificial Intelligence and Machine Learning.",
    url: "https://sanyamrana.dev",
    siteName: "Sanyam Rana Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanyam Rana | AI/ML Portfolio",
    description:
      "B.Tech Electrical Engineering student at IIT Jodhpur transitioning into Artificial Intelligence and Machine Learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-white antialiased selection:bg-primary/20 selection:text-secondary relative min-h-screen flex flex-col justify-between">
        {/* Fullscreen Interactive Canvas Background */}
        <CanvasBackground />
        
        {/* Sticky Header Nav */}
        <Navbar />
        
        {/* Core Page Content */}
        <main className="flex-grow">{children}</main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
