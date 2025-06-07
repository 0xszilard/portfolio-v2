import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";
import { placeholder } from "@/assets";
import { urlFor } from "@/lib/sanity/image";

export default function CategoryPosts({ posts }) {
  return (
    <section className="px-4 pb-16 md:px-6">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="group pt-0 transition-shadow hover:shadow-lg">
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={placeholder || urlFor(post.mainImage).url()}
                  width={350}
                  height={200}
                  alt={post.mainImage.alt}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-muted-foreground flex items-center justify-between gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime} read
                </div>
              </div>
              <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                <Link href={`/blog/${post.category.slug}/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-muted-foreground text-sm">{post.description}</p>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <User className="h-3 w-3" />
                {post.author}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
