"use client";

import { useState, useMemo } from "react";
import PageHero from "@/components/launch/shared/PageHero";
import BlogCard from "@/components/launch/blog/BlogCard";
import { blogPosts, blogCategories } from "@/data/blog-posts";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Dubio Blog"
        subtitle="Tutorials, product updates, and insights about AI dubbing and multilingual content creation."
      />

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-colors font-[family-name:var(--font-syne)] ${
                  activeCategory === cat
                    ? "bg-[#7C3AED] text-white"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-white/40 py-12">No posts in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
