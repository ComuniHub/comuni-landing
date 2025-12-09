const Button = ({ children, size = "default", variant = "default", className = "", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all hover:scale-105";

  const sizeStyles = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantStyles = {
    default: "bg-[#36d68a] text-white hover:bg-[#2bab6e] shadow-lg hover:shadow-xl",
    outline: "bg-white text-[#36d68a] border-2 border-[#36d68a] hover:bg-[#d7f7e8]"
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
