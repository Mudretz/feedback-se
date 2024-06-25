import { FC, useCallback, useState } from "react";
import { InputMask } from "../../shared/components/InputMask";
import { FormContainer } from "../../shared/components/FormContainer";
import { Button } from "../../shared/components/Button";
import { FeedBackProps, Stages } from "../../shared/types";
import { MASK_PLACEHOLDER } from "../../shared/constants";

interface Props extends FeedBackProps {
    item: Stages;
}

const BUTTON_TEXT = "получить обратную связь";

export const FinalForm: FC<Props> = ({ onClose, item }) => {
    const [phone, setPhone] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPhone(e.target.value);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(phone);
    };

    const validate = useCallback(
        (phone: string) => {
            if (!phone.length) return true;
            if (phone.length < 18) return true;
            return false;
        },
        [phone],
    );

    return (
        <FormContainer
            onSubmit={onSubmit}
            onClose={onClose}
            title={item.title}
        >
            {item.text && <p className='text-xs'>{item.text}</p>}
            <InputMask
                mask={"+7 (000) 000-00-00"}
                placeholder={item.placeholder ?? MASK_PLACEHOLDER}
                onChange={handleChange}
                value={phone}
            />
            <Button
                type='submit'
                disabled={validate(phone)}
            >
                {item.text ?? BUTTON_TEXT}
            </Button>
        </FormContainer>
    );
};
