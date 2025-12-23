import { useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

const MODAL_PREFIX = "modal-open-";
function hasModalsOpen() {
    return Array.from(document.body.classList).some((cls) =>
        cls.startsWith(MODAL_PREFIX)
    );
}

const Modal = ({ isOpen, onClose, children }) => {
    const modalId = useRef(`modal-${Math.random().toString(36).substring(2, 9)}`);
    const modalClass = useMemo(() => `${MODAL_PREFIX}${modalId.current}`, []);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add(modalClass);
            document.body.style.overflow = "hidden";
        } else {
            document.body.classList.remove(modalClass);

            if (!hasModalsOpen()) {
                document.body.style.overflow = "unset";
            }
        }

        return () => {
            document.body.classList.remove(modalClass);

            if (!hasModalsOpen()) {
                document.body.style.overflow = "unset";
            }
        };
    }, [isOpen, modalClass]);

    if (!isOpen) return null;

    const modalContent = (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default Modal;