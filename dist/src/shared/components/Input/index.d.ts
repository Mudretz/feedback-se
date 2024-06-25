import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<"input"> {
    borderColor?: string;
}
export declare const Input: import('react').ForwardRefExoticComponent<Omit<InputProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export {};
