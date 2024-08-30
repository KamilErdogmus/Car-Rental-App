import React from "react";

interface Itext {
  text: string;
  designs?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  icon?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  text,
  designs = "", // Default empty string if not provided
  disabled = false,
  type = "button",
  handleClick,
  icon,
}: Itext) => {
  return (
    <button
      className={`relative inline-flex h-12 active:scale-95 transition items-center overflow-hidden rounded-lg p-[1px] focus:outline-none ${designs}`}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ffff_0%,#1400c9_50%,#0000bf_100%)]"></span>
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
        {text}
        {icon && <img src={icon} className="w-6 h-6 ms-2" />}
      </span>
    </button>
  );
};

export default Button;
