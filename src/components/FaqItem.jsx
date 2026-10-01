import { Plus, Minus } from "lucide-react";

/**
 * A single question-and-answer row of the FAQ accordion.
 * Renders one collapsible card: the question is the toggle, the answer is
 * revealed only while `isOpen` is true. The open/closed state is owned by the
 * parent so the accordion can keep only one row expanded at a time.
 */
function FaqItem({ question, answer, isOpen = false, onToggle, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition ${className}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between p-4 text-left font-semibold text-sm sm:text-base hover:text-gold-soft"
      >
        <span>{question}</span>
        <span className="transition-transform duration-300">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-1 text-sm text-white/75 leading-relaxed border-t border-white/5">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FaqItem;
