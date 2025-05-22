import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import Footer from "@/components/ui/footer";
import { keywords } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "",
    template: "%s - 0xSzilard",
  },
  description: "",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL,
  },
  keywords: keywords,
  openGraph: {
    title: "",
    description: "",
    siteName: "0xSzilard",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    images: [
      {
        url: "/opengraph-image.png",
        secureUrl: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Preview image for ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bbe.insider",
    title: "",
    description: "",
    creator: "@szilard.mate",
    images: {
      url: "/twitter-image.png",
      alt: "Preview image for",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
