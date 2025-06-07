import BookingHero from "@/components/booking/BookingHero";
/* import BookingForm from "@/components/booking/BookingForm" */
import WhatToExpect from "@/components/booking/WhatToExpect";
import SocialProof from "@/components/booking/SocialProof";
import BookingFaq from "@/components/booking/BookingFaq";
import Booking from "@/components/home/Booking";

export const metadata = {
  title: "Book a Free Discovery Call - Software Solutions for Online Creators",
  description:
    "Book a free discovery call with InfoBridge - we build custom software tools and automation for online creators. Get expert consulting tailored to your creator business.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/booking`,
  },
  openGraph: {
    title: "Book a Free Discovery Call | InfoBridge",
    description:
      "Schedule a free strategy session with InfoBridge. We help online creators scale with custom-built software, automations, and consulting.",
    siteName: "InfoBridge",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_URL}/booking`,
    images: [
      {
        url: "/opengraph-image.png",
        secureUrl: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "InfoBridge – Software for Online Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@InfoBridge",
    title: "Book a Free Call | InfoBridge - Custom Software for Online Creators",
    description:
      "Turn your ideas into tools. Book a free call with InfoBridge and discover how custom software can grow your creator business.",
    creator: "@InfoBridge",
    images: {
      url: "/twitter-image.png",
      alt: "InfoBridge – Custom Software & Consulting for Creators",
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

export default function BookingPage() {
  return (
    <>
      <BookingHero />
      <Booking />
      {/*  <BookingForm /> */}
      <WhatToExpect />
      <BookingFaq />
      <SocialProof />
    </>
  );
}
