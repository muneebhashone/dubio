"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/launch/blog/${post.slug}`}
        className="film-frame group block overflow-hidden"
      >
        {/* Thumbnail placeholder */}
        <div className="h-48 bg-gradient-to-br from-[#7C3AED]/20 to-[#110e2e] flex items-center justify-center">
          <span className="text-white/20 text-sm font-[family-name:var(--font-syne)]">
            {post.category}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs bg-[#7C3AED]/20 text-[#7C3AED] font-[family-name:var(--font-syne)]">
              {post.category}
            </span>
            <span className="text-white/30 text-xs">{post.readTime}</span>
          </div>

          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#a78bfa] transition-colors font-[family-name:var(--font-syne)] line-clamp-2">
            {post.title}
          </h3>

          <p className="text-white/50 text-sm mb-4 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>

          <span className="text-white/30 text-xs">{formattedDate}</span>
        </div>
      </Link>
    </motion.div>
  );
}
