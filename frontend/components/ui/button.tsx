import * as React from 'react';

// Simplified shadcn/ui style button
export function Button(
  { className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white rounded ${className}`}
      {...props}
    />
  );
}
