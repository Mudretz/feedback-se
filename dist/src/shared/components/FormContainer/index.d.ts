import { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<"form"> {
    title: string;
    onClose: () => void;
}
export declare const FormContainer: FC<Props>;
export {};
