import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    isVisible: boolean;
    onClose: () => void;
}
export declare const Modal: FC<Props>;
export {};
