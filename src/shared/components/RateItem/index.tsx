import { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
    item: any;
    onClick: (value: number) => void;
}

export const RateItem: FC<Props> = ({ item, onClick }) => {
    return (
        <div key={item.id} className={styles.item}>
            <button
                className={styles.button}
                onClick={() => onClick(item.value)}
            >
                <img
                    src={item.image}
                    alt={item.text}
                    className={styles.image}
                />
            </button>
            <p className={styles.text}>{item.text}</p>
        </div>
    );
};
