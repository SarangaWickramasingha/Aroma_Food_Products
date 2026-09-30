/**
 * Expanding-circle CTA (Uiverse.io, 0x-Sarthak) recoloured to the site palette.
 * The label and arrow are cream on brand red; a cream circle tucked into the
 * right edge grows across the whole pill on hover, turning it espresso.
 * Pairs with the `.cta` rules in index.css.
 */
function CtaButton({ children, onClick, className = "" }) {
  return (
    <button type="button" onClick={onClick} className={`cta ${className}`}>
      <span>{children}</span>
      <svg viewBox="0 0 13 10" height="10" width="14" aria-hidden="true">
        <path d="M1,5 L11,5" />
        <polyline points="8 1 12 5 8 9" />
      </svg>
    </button>
  );
}

export default CtaButton;
