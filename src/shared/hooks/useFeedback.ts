import { useContext } from "react";
import { FeedBackContext, IFeedBackContext } from "../../context/FeedBackContext";

export const useFeedback = (): IFeedBackContext => {
    const context = useContext(FeedBackContext);
    if (!context) {
        throw new Error("error");
    }
    return context;
};
