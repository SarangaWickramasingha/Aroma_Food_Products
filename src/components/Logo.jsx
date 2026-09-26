/**
 * Aroma Food Products — brand identity.
 *
 * The mark is rebuilt as vector geometry traced from `public/logo.png`.
 * The source raster is a 1536x1024 render whose artwork sits on a vignetted
 * grey background with a baked-in soft drop shadow. That shadow overlaps the
 * strokes in intensity (the luma histogram has no clean valley), so a clean
 * alpha channel cannot be recovered by any local or global threshold — at
 * navbar size the extracted raster is an illegible smudge. Vector geometry
 * stays crisp at any size and inherits `currentColor`, so it themes itself
 * from the surrounding text colour.
 *
 * Composition: a crenellated tower (three merlons stepping down to the right)
 * with two banner flags, above three parallel waves.
 */
const LogoMark = ({ className = '', title = 'Aroma Food Products' }) => (
  <svg
    viewBox="-2 -2 300 360"
    className={className}
    role="img"
    aria-label={title}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>

    {/* Tower with crenellated battlements stepping down to the right */}
    <path d="M164 270 L164 0 L192 20 L192 52 L208 52 L208 20 L230 44 L230 72 L240 72 L240 49 L272 65 L272 270 Z" />

    {/* Banner flags */}
    <path d="M85 31 L120 44 L120 72 L85 87 Z" />
    <path d="M129 15 L157 25 L157 52 L129 67 Z" />

    {/* Waves */}
    <g fill="none" stroke="currentColor" strokeWidth="21" strokeLinecap="round">
      <path d="M10 272 C35 258 70 256 110 263 C170 273 230 277 284 278" />
      <path d="M10 305 C35 291 70 289 110 296 C170 306 230 310 284 311" />
      <path d="M10 338 C35 324 70 322 110 329 C170 339 230 343 284 344" />
    </g>
  </svg>
);

/**
 * Navbar / footer lockup: the mark beside the AROMA wordmark and the
 * "~Majestic Taste~" tagline from the original artwork.
 */
const Logo = ({ className = '', markClassName = '', title = 'Aroma Food Products' }) => (
  <span className={`flex items-center gap-3 ${className}`}>
    <LogoMark className={`h-11 w-auto shrink-0 text-white drop-shadow-md ${markClassName}`} title={title} />
    <span className="flex flex-col">
      <span className="block font-serif text-[22px] font-extrabold leading-none tracking-[0.28em] text-white drop-shadow-md">
        AROMA
      </span>
      <span className="-mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.3em] text-gold-soft">
        ~Majestic Taste~
      </span>
    </span>
  </span>
);

export { LogoMark };
export default Logo;
