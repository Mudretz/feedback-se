import { ComponentProps, FC } from "react";
import closeIcon from "../../../assets/close.png";

interface Props extends ComponentProps<"form"> {
    title: string;
    onClose: () => void;
}

export const FormContainer: FC<Props> = ({
    title,
    onClose,
    className,
    children,
    ...props
}) => {
    return (
        <form
            className={`w-full sm:w-[28rem] bg-white rounded-xl pb-6 px-4 sm:py-6 flex flex-col gap-3 relative ${className}`}
            {...props}
        >
            <button
                onClick={onClose}
                type='button'
                className='absolute right-4'
            >
                <img src={closeIcon} />
            </button>
            <div className='text-2xl text-center w-1/2 self-center'>
                <h2>{title}</h2>
            </div>
            <div className='min-h-px bg-line' />
            {children}
        </form>
    );
};
