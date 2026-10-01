/**
 * The single glowing contact CTA, shared by the contact page and the order
 * modal so both channels get identical hover/active/glow treatment.
 *
 * Rendering rules:
 * - `href` present  -> anchor, opens the channel in a new tab.
 * - `onClick` only  -> submit button, for flows that build a message first.
 * - `label` overrides the channel's default label (e.g. "Send Order via ...").
 *
 * Colors arrive from the channel's `theme` as CSS custom properties rather than
 * interpolated Tailwind classes, because Tailwind cannot see class names that
 * are built at runtime.
 */
const SocialButton = ({
  channel,
  label = channel.label,
  href,
  onClick,
  type = "submit",
  className = "",
}) => {
  const { Icon, theme } = channel;

  const style = {
    "--glow-base": theme.base,
    "--glow-hover": theme.hover,
    "--glow-border": theme.border,
    "--glow-glow": theme.glow,
  };

  const content = (
    <>
      <Icon size={18} />
      <span>{label}</span>
    </>
  );

  const classes = `btn-glow ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={style}>
      {content}
    </button>
  );
};

export default SocialButton;