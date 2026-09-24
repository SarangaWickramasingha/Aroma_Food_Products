function NavItem({ title, scoll, isActive = false, className = "" }) {
  return (
    <li className="relative">
      <button
        onClick={scoll}
        className={`group relative py-1 text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${
          isActive
            ? "text-[#E8D5B0] drop-shadow-[0_2px_8px_rgba(232,213,176,0.3)]"
            : "text-white/80 hover:text-white"
        } ${className}`}
      >
        {title}
        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-[#C44A3A] transition-all duration-300 ease-out ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </button>
    </li>
  );
}

export default NavItem;