import { FC } from "react";
import { FeedBackProvider } from "../../context/FeedBackContext";
import { FeedBackModal } from "../FeedBackModal";
import "../../tailwind.css";
interface IFeedBackProps {
    appId: number;
}

export const Feedback: FC<IFeedBackProps> = (props) => {
    return (
        <FeedBackProvider>
            <FeedBackModal {...props} />
        </FeedBackProvider>
    );
};
