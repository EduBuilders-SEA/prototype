import * as React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
  { className, ...props },
  ref
) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';
