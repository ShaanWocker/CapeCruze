import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cape Cruz Tours & Transport – Cape Town's Trusted Travel Partner",
  description:
    "Cape Cruz Tours & Transport offers professional airport transfers, custom day tours, hotel shuttles, and group transport across Cape Town, South Africa. Book online today.",
  keywords:
    "Cape Town transport, airport transfer, Cape Town tours, minibus hire, shuttle service, Cape Cruz",
  openGraph: {
    title: "Cape Cruz Tours & Transport",
    description:
      "Professional tours and transport services in Cape Town, South Africa.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
