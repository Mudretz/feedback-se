import { FC } from "react";
import styles from "./styles.module.scss";
import { RATES } from "../../shared/constants";
import { RateItem } from "../../shared/components/RateItem";
import { useFeedback } from "../../shared/hooks/useFeedback";
import { FeedBackProps, Stages } from "../../shared/types";
import { FormContainer } from "../../shared/components/FormContainer";

interface Props extends FeedBackProps {
    item: Stages;
}

export const InitialContent: FC<Props> = ({ item, onClose }) => {
    const { stage, onChangeRate, onChangeStage } = useFeedback();

    const onSubmit = (value: number) => {
        onChangeRate(value);
        onChangeStage(stage + 1);
    };

    return (
        <FormContainer title={item.title} onClose={onClose}>
            {item.text && <p className='text-xs'>{item.text}</p>}
            <div className={styles.list}>
                {RATES.map((item) => (
                    <RateItem key={item.id} item={item} onClick={onSubmit} />
                ))}
            </div>
        </FormContainer>
    );
};
