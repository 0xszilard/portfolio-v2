import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  CheckCircle,
  Users,
  Video,
  Phone,
  MessageSquare,
  Star,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";
import BookingHero from "@/components/booking/BookingHero";
import BookingForm from "@/components/booking/BookingForm";
import WhatToExpect from "@/components/booking/WhatToExpect";
import SocialProof from "@/components/booking/SocialProof";
import BookingFaq from "@/components/booking/BookingFaq";

export const metadata = {
  title: "",
  description: "",

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/booking`,
  },
  openGraph: {
    title: "",
    description: "",
    siteName: "InfoBridge",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    images: [
      {
        url: "/opengraph-image.png",
        secureUrl: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@InfoBridge",
    title: "",
    description: "",
    creator: "@InfoBridge",
    images: {
      url: "/twitter-image.png",
      alt: "",
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
      <BookingForm />
      <WhatToExpect />
      <BookingFaq />
      <SocialProof />
    </>
  );
}
