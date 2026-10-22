import { useEffect } from "react";
import { X } from "lucide-react";
import { BlogSection } from "../data/Blogdetails";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-md animate-fade-slide-in sm:p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-5 shadow-2xl sm:p-10 text-espresso-900"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close article modal"
          className="absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/5 transition hover:bg-brand-red hover:text-white sm:top-5 sm:right-5"
        >
          <X size={18} />
        </button>

        {/* Category & Read Time */}
        <div className="eyebrow flex items-center gap-3 pr-12 text-brand-red">
          <span>{article.category || BlogSection.fallbacks.modalCategory}</span>
          <span>•</span>
          <span className="text-espresso-600">
            {article.readTime || BlogSection.fallbacks.readTime}
          </span>
        </div>

        {/* Title */}
        <h2
          id="article-modal-title"
          className="heading-serif mt-3 pr-10 text-2xl leading-snug sm:text-3xl"
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
            <p className="text-sm font-bold text-espresso-900">{article.author}</p>
            <p className="text-xs text-espresso-600">{article.date} · {article.authorRole || BlogSection.fallbacks.authorRole}</p>
          </div>
        </div>

        {/* Hero Image */}
        {article.image && (
          <div className="mt-6 overflow-hidden rounded-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover sm:h-64"
            />
          </div>
        )}

        {/* Article Excerpt / Highlight */}
        <div className="mt-6 rounded-2xl bg-brand-red/5 border-l-4 border-brand-red p-4 text-sm font-medium italic leading-relaxed text-espresso-800">
          "{article.excerpt}"
        </div>

        {/* Full Content */}
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-espresso-800/85">
          {article.fullContent ? (
            <div className="whitespace-pre-line prose prose-stone">
              {article.fullContent}
            </div>
          ) : (
            <p>{article.excerpt}</p>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col items-start gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold text-espresso-600">
            {BlogSection.sharePrompt}
          </p>
          <button
            onClick={onClose}
            className="w-full rounded-full bg-espresso-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-brand-red sm:w-auto"
          >
            {BlogSection.backCta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;