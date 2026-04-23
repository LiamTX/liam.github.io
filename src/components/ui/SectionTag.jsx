import React from "react";

const SectionTag = ({ children, tone = "light", className = "" }) => {
  const color =
    tone === "dark"
      ? "text-white/60"
      : "text-cl-text-on-light-muted";

  return (
    <span
      className={`inline-block text-xs uppercase tracking-[0.2em] font-medium ${color} ${className}`}
    >
      [{children}]
    </span>
  );
};

export default SectionTag;
