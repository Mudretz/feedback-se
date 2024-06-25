import { FC, useEffect, useState } from "react";
import { Modal } from "../../shared/components/Modal";
import { FinalForm } from "../FinalForm";
import { useFeedback } from "../../shared/hooks/useFeedback";
import { InitialContent } from "../InitialContent";
import { FeedbackForm } from "../FeedbackForm";
import { FeedBackProps, Stages } from "../../shared/types";
import { STAGES } from "../../shared/constants";

export const FeedBackModal: FC<Omit<FeedBackProps, "onClose" | "isVisible">> = (props) => {
    const { stage, onChangeStage, } = useFeedback();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, [visible]);

    const onClose = () => {
        setVisible(false);
        onChangeStage(0);
    };

    const getStage = (item: Stages) => {
        switch (stage) {
            case 0: {
                return (
                    <InitialContent
                        key={item.id}
                        item={item}
                        {...props}
                        onClose={onClose}
                        isVisible={visible}
                    />
                );
            }
            case 1: {
                return (
                    <FeedbackForm
                        key={item.id}
                        item={item}
                        {...props}
                        onClose={onClose}
                        isVisible={visible}
                    />
                );
            }
            case 2: {
                return (
                    <FinalForm
                        key={item.id}
                        item={item}
                        {...props}
                        onClose={onClose}
                        isVisible={visible}
                    />
                );
            }
        }
    };

    return (
        <Modal {...props} isVisible={visible} onClose={onClose}>
            {STAGES.map((item, index) => {
                if (index === stage) {
                    return getStage(item);
                }
            })}
        </Modal>
    );
};
