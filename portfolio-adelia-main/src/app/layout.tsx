import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { ScrollIndicator } from "@/components/layout/ScrollIndicator";
import { CvModalProvider } from "@/context/CvModalContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://adeliadeswita.com"),
  title: {
    default: "Adelia Deswita — Business Intelligence & Data Analyst",
    template: "%s | Adelia Deswita",
  },
  description:
    "Personal portfolio of Adelia Deswita, an Information Systems graduate (Cum Laude) and Business Intelligence Analyst specializing in e-commerce performance analytics, fintech payment economics, SQL, BigQuery, and data visualization.",
  keywords: [
    "Adelia Deswita",
    "Business Intelligence Analyst",
    "Data Analyst",
    "Blibli BI Intern",
    "Amartha Payment Analytics",
    "BigQuery",
    "SQL",
    "Looker Studio",
    "Tableau",
    "Geospatial Analytics",
  ],
  authors: [{ name: "Adelia Deswita" }],
  creator: "Adelia Deswita",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adeliadeswita.com",
    title: "Adelia Deswita — Business Intelligence & Data Analyst",
    description:
      "Information Systems Graduate & Business Intelligence Analyst turning complex data into scalable decisions and dashboards.",
    siteName: "Adelia Deswita Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adelia Deswita — Business Intelligence & Data Analyst",
    description:
      "Information Systems Graduate & Business Intelligence Analyst turning complex data into scalable decisions and dashboards.",
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=cat4", type: "image/svg+xml" },
      { url: "/icon.png?v=cat4", type: "image/png" },
      { url: "/favicon.ico?v=cat4", sizes: "any" },
    ],
    shortcut: "/icon.svg?v=cat4",
    apple: "/icon.png?v=cat4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Playfair+Display:ital,wght@0,400..800;1,400..800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#F2F2ED] text-[#18181B] selection:bg-[#E0E7FF] selection:text-[#1E40AF]">
        <CvModalProvider>
          <ScrollIndicator />
          <Navbar />
          <main className="flex-1">{children}</main>
        </CvModalProvider>
      </body>
    </html>
  );
}
