import { FC } from 'react';

/**
 * @name Feedback
 * @description - Компонет UX фидбека
 *
 * @param appId - The async callback
 *
 * @example
 * <Feedback appId={number} />
 */
declare const Feedback: FC<IFeedBackProps>;
export default Feedback;

declare interface IFeedBackProps {
    appId: number;
}

export { }
