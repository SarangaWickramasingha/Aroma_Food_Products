import { Clock, ArrowRight } from "lucide-react";

const BlogCard = ({ blog, onRead }) => {
  return (
    <article
      onClick={() => onRead?.(blog)}
      className="card card-hover group relative flex w-full max-w-[390px] flex-col cursor-pointer"
    >
      {/* Image Container with Category Badge */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-[230px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Pill */}
        <span className="pill pill-red absolute top-4 left-4">
          {blog.category || "Journal"}
        </span>

        {/* Read Time */}
        <span className="pill pill-dark-soft absolute bottom-3 right-4 inline-flex items-center gap-1.5 px-2.5 py-0.5">
          <Clock size={12} />
          {blog.readTime || "3 min read"}
        </span>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Date & Author */}
          <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-espresso-400">
            <span>{blog.date}</span>
            <span>•</span>
            <span>By {blog.author}</span>
          </div>

          {/* Title */}
          <h3 className="heading-serif mt-3 text-[19px] leading-[26px] text-espresso-900 transition-colors group-hover:text-brand-red">
            {blog.title}
          </h3>

          <hr className="my-3.5 border-black/5" />

          {/* Excerpt */}
          <p className="text-[14px] leading-[22px] text-espresso-500 line-clamp-3">
            {blog.excerpt}
          </p>
        </div>

        {/* Read More Trigger */}
        <div className="mt-5 flex items-center justify-between pt-2">
          <span className="eyebrow inline-flex items-center gap-1.5 text-brand-red transition-all duration-300 group-hover:gap-2.5">
            Read Article
            <ArrowRight size={14} />
          </span>
          <span className="text-xs text-espresso-900/40 transition group-hover:text-brand-red">
            Tap to open
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;