"use client";

import React from "react";
import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  leftIcon,
  rightIcon,
  link,
  fullWidth = false,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  // Base classes for button
  const baseClasses = `
    inline-flex items-center justify-center
    rounded-full font-semibold px-6 py-3
    transition duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? "w-full" : "inline-flex"}
  `;

  // Variant classes
  const variantClasses = {
    primary:
      "bg-primary hover:bg-secondary active:bg-white/80 text-white shadow-[0_4px_10px_0_rgba(44,122,123,0.5)] hover:shadow-[0_8px_15px_0_rgba(44,122,123,0.7)]",
    secondary:
      "bg-gray-700 text-white hover:bg-gray-600 active:bg-gray-800",
    outline:
      "border border-primary text-black active:bg-white/80 hover:bg-secondary hover:text-white shadow-[0_4px_10px_0_rgba(44,122,123,0.5)] hover:shadow-[0_8px_15px_0_rgba(44,122,123,0.7)]",
  }[variant];

  // Render <Link> if link prop is provided
  if (link) {
    return (
      <Link
        href={link}
        className={`${baseClasses} ${variantClasses} ${className}`}
        {...props} // Spread any additional props
      >
        {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
      </Link>
    );
  }

  // Render <button> otherwise
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className} cursor-pointer`}
      {...props} // Spread additional props like aria-label, title, etc.
    >
      {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </button>
  );
}
