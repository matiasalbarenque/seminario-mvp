import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from './label';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  label?: string;
  onChange?: (value: string) => void;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ autoComplete, className, type, onChange, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-2">
        {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
        <input
          autoComplete={autoComplete || 'off'}
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          onChange={({ target }) => onChange && onChange(target.value)}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
