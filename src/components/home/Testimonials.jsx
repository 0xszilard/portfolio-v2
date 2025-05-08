"use client";

import { Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VideoTestimonial = ({
  videoSrc,
  thumbnailSrc,
  author,
  role,
  company,
  avatarSrc,
  quote,
}) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
          <>
            <img
              src={thumbnailSrc || "/placeholder.svg"}
              alt={`${author} video thumbnail`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button
                variant="outline"
                size="icon"
                className="text-primary hover:text-primary-dark h-16 w-16 rounded-full bg-white/90 hover:bg-white"
              >
                <Play className="h-8 w-8 fill-current" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
          </>

          <video className={`absolute inset-0 h-full w-full object-cover`} />
        </div>
      </div>
      <CardContent className="p-6">
        <blockquote className="mb-4 text-lg italic">"{quote}"</blockquote>
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatarSrc} alt={author} />
            <AvatarFallback>
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-muted-foreground text-sm">{role}</p>
            <p className="text-sm font-medium">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function VideoTestimonialSection() {
  const testimonials = [
    {
      videoSrc: "https://example.com/video1.mp4", // Replace with actual video URL
      thumbnailSrc: "/placeholder.svg?height=240&width=320",
      author: "Emily Rodriguez",
      role: "Chief Marketing Officer",
      company: "TechGrowth Inc.",
      avatarSrc: "/placeholder.svg?height=48&width=48",
      quote:
        "The platform completely transformed how we approach customer engagement. We've seen a 40% increase in retention since implementation.",
    },
    {
      videoSrc: "https://example.com/video2.mp4", // Replace with actual video URL
      thumbnailSrc: "/placeholder.svg?height=240&width=320",
      author: "David Kim",
      role: "Founder & CEO",
      company: "Startup Ventures",
      avatarSrc: "/placeholder.svg?height=48&width=48",
      quote:
        "As a startup founder, I needed a solution that could scale with us. This exceeded all my expectations and helped us grow 3x in just one year.",
    },
    {
      videoSrc: "https://example.com/video3.mp4", // Replace with actual video URL
      thumbnailSrc: "/placeholder.svg?height=240&width=320",
      author: "Sarah Johnson",
      role: "Product Director",
      company: "Enterprise Solutions",
      avatarSrc: "/placeholder.svg?height=48&width=48",
      quote:
        "The implementation was seamless, and the support team was there every step of the way. I couldn't recommend it more highly.",
    },
  ];

  return (
    <section className="px-4 py-10">
      <div className="container m-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Customer Success Stories
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Hear directly from our customers about how our product has
            transformed their businesses.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <VideoTestimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
