function NavItem({ title, scoll, isActive = false, className = "" }) {
  return (
    <li className="relative">
      <button
        onClick={scoll}
        className={`group relative py-1 text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${
          isActive
            ? "text-gold-soft drop-shadow-[0_2px_8px_rgba(232,213,176,0.3)]"
            : "text-white/80 hover:text-white"
        } ${className}`}
      >
        {title}
        <span
          className={`nav-underline ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
        />
      </button>
    </li>
  );
}

export default NavItem;