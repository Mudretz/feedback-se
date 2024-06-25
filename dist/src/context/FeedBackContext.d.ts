import { FC } from 'react';

export interface IFeedBackContext {
    rateValue: number | null;
    text: string;
    stage: number;
    onChangeStage: (stage: number) => void;
    onChangeRate: (value: number) => void;
    onSetText: (value: string) => void;
}
declare const FeedBackContext: import('react').Context<IFeedBackContext | null>;
interface FeedBackProviderProps {
    children: React.ReactNode;
}
declare const FeedBackProvider: FC<FeedBackProviderProps>;
export { FeedBackProvider, FeedBackContext };
