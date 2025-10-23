import { Montserrat } from "next/font/google";
import "./globals.css";

// Montserrat font (variable for Tailwind + CSS)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional weights
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Saudi Stone Factory",
  description: "Best Natural Stones for Construction and Decoration in Riyadh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
