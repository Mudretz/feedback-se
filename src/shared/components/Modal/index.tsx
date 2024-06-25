import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import { Sheet } from "react-modal-sheet";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface Props extends PropsWithChildren {
    isVisible: boolean;
    onClose: () => void;
}

export const Modal: FC<Props> = ({ isVisible, onClose, children }) => {
    const { width } = useWindowDimensions();

    if (width < 640) {
        return (
            <Sheet isOpen={isVisible} onClose={onClose} detent='content-height'>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>{children}</Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop onTap={onClose} />
            </Sheet>
        );
    }

    if (!isVisible) return null;

    return createPortal(
        <div
            className={styles.modal}
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            {children}
        </div>,
        document.body,
    );
};
