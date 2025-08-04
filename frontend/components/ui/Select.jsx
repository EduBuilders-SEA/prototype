import React from "react";

export const Select = React.forwardRef(({ className = "", ...props }, ref) => (
  <select
    ref={ref}
    className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm ${className}`}
    {...props}
  />
));
Select.displayName = "Select";
