import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import FadeInView from "@/components/launch/shared/FadeInView";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — Dubio Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/launch/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors mb-8 font-[family-name:var(--font-syne)]"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <FadeInView>
            <span className="inline-block px-3 py-1 rounded-full text-xs bg-[#7C3AED]/20 text-[#7C3AED] mb-4 font-[family-name:var(--font-syne)]">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-normal leading-tight mb-6 font-[family-name:var(--font-instrument-serif)] italic launch-gradient-text">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-white/40 text-sm mb-12">
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <article
              className="[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-[family-name:var(--font-syne)] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-[family-name:var(--font-syne)] [&_p]:text-white/60 [&_p]:leading-relaxed [&_p]:mb-4 [&_strong]:text-white/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeInView>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-10 border-t border-white/5">
              <h3 className="text-xl font-semibold text-white mb-8 font-[family-name:var(--font-syne)]">
                Related Posts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/launch/blog/${related.slug}`}
                    className="film-frame p-6 group block"
                  >
                    <span className="text-xs text-[#7C3AED] font-[family-name:var(--font-syne)] mb-2 block">
                      {related.category}
                    </span>
                    <h4 className="text-white font-semibold group-hover:text-[#a78bfa] transition-colors font-[family-name:var(--font-syne)] mb-2">
                      {related.title}
                    </h4>
                    <p className="text-white/40 text-sm line-clamp-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
