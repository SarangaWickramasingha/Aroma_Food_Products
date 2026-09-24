const BlogCard = ({ blog, onRead, showArrow = false }) => {
  return (
    <article
      onClick={() => onRead?.(blog)}
      className="group relative flex w-full max-w-[390px] flex-col overflow-hidden rounded-3xl bg-[#FFFDF8] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer border border-black/5"
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
        <span className="absolute top-4 left-4 rounded-full bg-[#C44A3A] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
          {blog.category || "Journal"}
        </span>

        {/* Read Time */}
        <span className="absolute bottom-3 right-4 rounded-full bg-black/60 px-2.5 py-0.5 text-[11px] font-semibold text-white/90 backdrop-blur-xs">
          ⏱ {blog.readTime || "3 min read"}
        </span>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Date & Author */}
          <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#8A7F74]">
            <span>{blog.date}</span>
            <span>•</span>
            <span>By {blog.author}</span>
          </div>

          {/* Title */}
          <h3 className="mt-3 font-serif text-[19px] font-bold leading-[26px] text-[#1A1008] transition-colors group-hover:text-[#C44A3A]">
            {blog.title}
          </h3>

          <hr className="my-3.5 border-black/5" />

          {/* Excerpt */}
          <p className="text-[14px] leading-[22px] text-[#6B6259] line-clamp-3">
            {blog.excerpt}
          </p>
        </div>

        {/* Read More Trigger */}
        <div className="mt-5 flex items-center justify-between pt-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C44A3A] transition-all duration-300 group-hover:gap-2.5">
            Read Article
            <span className="text-sm">→</span>
          </span>
          <span className="text-xs text-black/40 group-hover:text-[#C44A3A] transition">
            Tap to open
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;