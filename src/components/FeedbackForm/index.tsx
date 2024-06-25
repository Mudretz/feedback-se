import { FC, useCallback, useId, useState } from "react";
import vector from "../../assets/vector.png";
import check from "../../assets/check.png";
import deleteIcon from "../../assets/delete.png";
import { v4 as uuidv4 } from "uuid";
import { FeedBackProps, Stages } from "../../shared/types";
import { useFeedback } from "../../shared/hooks/useFeedback";
import { FormContainer } from "../../shared/components/FormContainer";
import { Button } from "../../shared/components/Button";

interface Files {
    id: string;
    name: string;
}

interface Props extends FeedBackProps {
    item: Stages;
}

export const FeedbackForm: FC<Props> = ({ item, onClose }) => {
    const { stage, onChangeStage } = useFeedback();
    const [text, setText] = useState("");
    const [file, setFile] = useState<Files[]>([]);
    const id = useId();

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleFileInputChange: React.ChangeEventHandler<
        HTMLInputElement
    > = async (event) => {
        try {
            if (!event.target.files?.[0]) return;
            const current: Files = {
                id: uuidv4(),
                name: event.target.files[0].name,
                // image64: await convertFileToBase64(event.target.files[0]),
            };
            setFile((prev) => [...prev, current]);
        } catch {
            setFile(file);
        }
    };

    const handleDeleteFile = (id: string) => {
        setFile((prev) => [...prev.filter((item) => item.id !== id)]);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(text);
        console.log(file);
        onChangeStage(stage + 1);
    };

    const validate = useCallback(
        (text: string) => {
            if (!text.length) return true;
            if (text.length > 1000) return true;
            return false;
        },
        [text],
    );

    return (
        <FormContainer onSubmit={onSubmit} title={item.title} onClose={onClose}>
            <textarea
                className='border-2 border-[#66B22C] border-solid h-36 rounded-xl resize-none py-3 px-4 outline-none'
                placeholder='Мне бы хотелось, чтобы'
                onChange={onChange}
                value={text}
            />
            <ul className='flex flex-col gap-2'>
                {file.map((item) => (
                    <li className='flex gap-2 items-center' key={item.id}>
                        <img src={check} />
                        <p>{item.name}</p>
                        <button
                            onClick={() => handleDeleteFile(item.id)}
                            className='ml-auto'
                        >
                            <img src={deleteIcon} />
                        </button>
                    </li>
                ))}
            </ul>
            <div className='self-end w-full'>
                <input
                    type='file'
                    accept='image/png, image/jpeg'
                    className='opacity-0 absolute invisible'
                    onChange={handleFileInputChange}
                    id={id}
                />
                <label
                    htmlFor={id}
                    className='h-20 bg-[#ECF5E4] rounded-xl flex items-center justify-center gap-4 px-5 py-4 cursor-pointer'
                >
                    <img src={vector} alt='прикрепить изображение' />
                    <p className='font-bold text-start'>Прикрепить скриншот</p>
                </label>
            </div>
            {item.button && (
                <Button
                    type='submit'
                    disabled={validate(text)}
                    bgColor={item.buttonColor}
                >
                    {item.button}
                </Button>
            )}
        </FormContainer>
    );
};
