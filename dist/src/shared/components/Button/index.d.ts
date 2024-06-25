import { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<"button"> {
    bgColor?: string | null;
}
export declare const Button: FC<Props>;
export {};
