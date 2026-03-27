"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import PageHero from "@/components/launch/shared/PageHero";
import BlogCard from "@/components/launch/blog/BlogCard";
import { blogPosts, blogCategories } from "@/data/blog-posts";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const searchLower = search.toLowerCase();
      const matchesSearch = search === "" ||
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Dubio Blog"
        subtitle="Tutorials, product updates, and insights about AI dubbing and multilingual content creation."
      />

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="relative mb-8">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#7C3AED]/50 focus:outline-none focus:ring-1 focus:ring-[#7C3AED]/50 transition-colors"
            />
          </div>

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
            <p className="text-center text-white/40 py-12">
              {search ? "No posts match your search." : "No posts in this category yet."}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
