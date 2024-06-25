import { Input } from "../Input";
import { IMaskMixin } from "react-imask";

export const InputMask = IMaskMixin(({ inputRef, ...props }) => {
    return <Input {...props} ref={inputRef as React.Ref<HTMLInputElement>} />;
});
