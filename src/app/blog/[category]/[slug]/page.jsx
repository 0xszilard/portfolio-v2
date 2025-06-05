export async function generateMetadata() {
  return {
    title: "",
    description: "",

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/blog/${category}/${post.slug}`,
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
}

export default function BlogPostPage() {
  return <></>;
}
