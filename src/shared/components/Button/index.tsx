import { ComponentProps, FC } from "react";
import { GREEN_COLOR } from "../../constants";

interface Props extends ComponentProps<"button"> {
    bgColor?: string | null;
}

export const Button: FC<Props> = ({
    bgColor = GREEN_COLOR,
    children,
    className,
    ...props
}) => {
    return (
        <button
            className={`rounded-xl py-3 px-4 text-white bg-[${bgColor}] disabled:bg-[#BFBFBF] disabled:text-opacity-50 outline-none ${className}`}
            {...props}
        >
            получить обратную связь
        </button>
    );
};
