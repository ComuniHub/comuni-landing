const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#cfcfcf] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card };
