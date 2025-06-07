import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Target, Zap, Quote } from "lucide-react";
import { placeholder } from "@/assets";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutCTA from "@/components/about/AboutCTA";
import AboutStats from "@/components/about/AboutStats";

export const metadata = {
  title: "About Us",
  description:
    "InfoBridge helps online creators scale with custom software tools, automation, and expert consulting. Learn more about our mission, values, and team.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/about`,
  },
  openGraph: {
    title: "About InfoBridge | Custom Software for Creators",
    description:
      "Meet the team behind InfoBridge. We build powerful, tailored tech for online creators - from automations to full SaaS platforms.",
    siteName: "InfoBridge",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_URL}/about`,
    images: [
      {
        url: "/opengraph-image.png",
        secureUrl: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "InfoBridge - Meet the team behind the software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@InfoBridge",
    title: "About InfoBridge | Software & Consulting for Creators",
    description:
      "At InfoBridge, we empower creators with smart tech solutions. Get to know our story and why we build tools creators love.",
    creator: "@InfoBridge",
    images: {
      url: "/twitter-image.png",
      alt: "InfoBridge - Custom Software & Consulting for Creators",
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

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <ValuesSection />
      {/*  <TeamSection /> */}
      <AboutTestimonials />
      <AboutStats />
      <AboutCTA />
    </>
  );
}
