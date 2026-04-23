import React from "react";
import { ArrowUpRight } from "lucide-react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap";

const variantClasses = {
  light:
    "bg-white text-black hover:bg-neutral-200",
  "outline-light":
    "border border-white/25 bg-transparent text-white hover:bg-white/10",
  dark:
    "bg-black text-white hover:bg-neutral-800",
  "outline-dark":
    "border border-black/20 bg-transparent text-black hover:bg-black/5",
};

const PillButton = React.forwardRef(function PillButton(
  {
    variant = "light",
    href,
    onClick,
    type,
    icon: Icon = ArrowUpRight,
    showIcon = true,
    className = "",
    children,
    ...rest
  },
  ref
) {
  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.light} ${className}`;

  const content = (
    <>
      {children}
      {showIcon && Icon && <Icon size={16} strokeWidth={2} />}
    </>
  );

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type || "button"}
      onClick={onClick}
      className={classes}
      {...rest}
    >
      {content}
    </button>
  );
});

export default PillButton;
