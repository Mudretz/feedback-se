import { FC } from "react";
import { FeedBackProvider } from "../../context/FeedBackContext";
import { FeedBackModal } from "../FeedBackModal";
import { FeedBackProps } from "../../shared/types";

export const Feedback: FC<FeedBackProps> = (props) => {
    return (
        <FeedBackProvider>
            <FeedBackModal {...props} />
        </FeedBackProvider>
    );
};
