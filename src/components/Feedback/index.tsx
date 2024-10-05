import { FC } from "react";
import { FeedBackProvider } from "../../context/FeedBackContext";
import { FeedBackModal } from "../FeedBackModal";
import "../../tailwind.css";

/* Тип IFeedBack */
interface IFeedBackProps {
    /* Идентификатор приложения */
    appId: number;
}
/**
 * @name Feedback
 * @description - Компонет UX фидбека
 *
 * @param appId - The async callback
 *
 * @example
 * <Feedback appId={number} /> 
 */
export const Feedback: FC<IFeedBackProps> = (props) => {
    return (
        <FeedBackProvider>
            <FeedBackModal {...props} />
        </FeedBackProvider>
    );
};
