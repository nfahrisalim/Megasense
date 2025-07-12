import "./globals.css";
import { cx } from "@/src/utils";
import { Inter, Manrope, Montserrat } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "../components/Footer";
import siteMetadata from "../utils/siteMetaData";
import Script from "next/script";
import { ThemeProvider } from "@/src/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

// FIXED: prevent error if siteMetadata.siteUrl is undefined or invalid
let metadataBase;
try {
  metadataBase = new URL(siteMetadata.siteUrl);
} catch (error) {
  console.error("Invalid siteMetadata.siteUrl:", siteMetadata.siteUrl);
  metadataBase = new URL("https://default-url.com"); // fallback URL
}

export const metadata = {
  metadataBase,
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          montserrat.variable,
          "font-mont bg-light dark:bg-dark"
        )}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
