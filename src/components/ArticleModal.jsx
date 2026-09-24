import { useEffect } from "react";

const ArticleModal = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md animate-fade-slide-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#FFFDF8] p-6 shadow-2xl sm:p-10 text-[#1A1008]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close article modal"
          className="absolute top-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/5 text-lg font-bold text-[#1A1008] transition hover:bg-[#C44A3A] hover:text-white"
        >
          ✕
        </button>

        {/* Category & Read Time */}
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#C44A3A]">
          <span>{article.category || "Story"}</span>
          <span>•</span>
          <span className="text-black/50">{article.readTime || "3 min read"}</span>
        </div>

        {/* Title */}
        <h2
          id="article-modal-title"
          className="mt-3 font-serif text-2xl font-extrabold leading-snug sm:text-3xl"
        >
          {article.title}
        </h2>

        {/* Author Info */}
        <div className="mt-4 flex items-center gap-3 border-b border-black/10 pb-5">
          {article.authorAvatar && (
            <img
              src={article.authorAvatar}
              alt={article.author}
              className="h-10 w-10 rounded-full object-cover shadow-sm"
            />
          )}
          <div>
            <p className="text-sm font-bold text-[#1A1008]">{article.author}</p>
            <p className="text-xs text-black/50">{article.date} · {article.authorRole || "Aroma Team"}</p>
          </div>
        </div>

        {/* Hero Image */}
        {article.image && (
          <div className="mt-6 overflow-hidden rounded-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="h-64 w-full object-cover"
            />
          </div>
        )}

        {/* Article Excerpt / Highlight */}
        <div className="mt-6 rounded-2xl bg-[#C44A3A]/5 border-l-4 border-[#C44A3A] p-4 text-sm font-medium italic leading-relaxed text-[#2C1A0E]">
          "{article.excerpt}"
        </div>

        {/* Full Content */}
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#2C1A0E]/85">
          {article.fullContent ? (
            <div className="whitespace-pre-line prose prose-stone">
              {article.fullContent}
            </div>
          ) : (
            <p>{article.excerpt}</p>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
          <p className="text-xs font-semibold text-black/60">
            Enjoyed this read? Share with fellow food & coffee enthusiasts.
          </p>
          <button
            onClick={onClose}
            className="rounded-full bg-[#2C1A0E] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#C44A3A]"
          >
            Back to Journal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
