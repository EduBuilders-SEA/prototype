import React from "react";

export const Input = React.forwardRef(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm ${className}`}
    {...props}
  />
));
Input.displayName = "Input";
