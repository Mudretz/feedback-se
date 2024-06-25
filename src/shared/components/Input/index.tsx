import { ComponentProps, forwardRef } from "react";
import { GREEN_COLOR } from "../../constants";

interface InputProps extends ComponentProps<"input"> {
    borderColor?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ borderColor = GREEN_COLOR, readOnly, className, ...props }, ref) => {
        return (
            <input
                {...props}
                ref={ref}
                className={`border-2 border-[${borderColor}] border-solid h-10 rounded-xl py-3 px-4 outline-none ${
                    readOnly && "cursor-default"
                } ${className}`}
            />
        );
    },
);
