import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientTracker from "../components/ClientTracker"; // new client component for GA

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Saudi Stone Factory",
  description: "Best Natural Stones for Construction and Decoration in Riyadh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <ClientTracker /> {/* Handles pageview tracking */}
        {children}
      </body>
    </html>
  );
}
