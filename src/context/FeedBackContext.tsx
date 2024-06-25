import { FC, createContext, useState } from "react";

export interface IFeedBackContext {
    rateValue: number | null;
    text: string;
    stage: number;
    onChangeStage: (stage: number) => void;
    onChangeRate: (value: number) => void;
    onSetText: (value: string) => void;
}

const FeedBackContext = createContext<IFeedBackContext | null>(null);

interface FeedBackProviderProps {
    children: React.ReactNode;
}

const FeedBackProvider: FC<FeedBackProviderProps> = ({ children }) => {
    const [rateValue, setRateValue] = useState<number | null>(null);
    const [stage, setStage] = useState(0);
    const [text, setText] = useState("");

    const onChangeRate = (value: number) => {
        setRateValue(value);
    };

    const onSetText = (value: string) => {
        setText(value);
    };

    const onChangeStage = (value: number) => {
        setStage(value);
    };

    return (
        <FeedBackContext.Provider
            value={{
                rateValue,
                text,
                stage,
                onChangeStage,
                onSetText,
                onChangeRate,
            }}
        >
            {children}
        </FeedBackContext.Provider>
    );
};

export { FeedBackProvider, FeedBackContext };
