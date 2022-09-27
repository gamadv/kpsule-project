import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ModalContainer } from "./styles";
type TModalProps = {
  isShowModal: boolean;
  children?: React.ReactNode;
  onCloseModal?: () => void;
};

export const useModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  function toggleModal() {
    setIsShowModal((oldState) => !oldState);
  }

  return {
    isShowModal,
    toggleModal,
  };
};

export function Modal({ children, isShowModal, onCloseModal }: TModalProps) {
  const onEscKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isShowModal) return;

      event.key === "Escape" && onCloseModal();

      return;
    },
    [isShowModal, onCloseModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", onEscKeyDown, false);
    return () => {
      window.removeEventListener("keydown", onEscKeyDown, false);
    };
  }, [onEscKeyDown]);

  if (isShowModal) {
    return (
      <>
        {ReactDOM.createPortal(
          <ModalContainer>
            <div id="modalOverlay" onClick={onCloseModal}></div>
            <section
              id="modalWrapper"
              aria-modal
              aria-hidden
              tabIndex={-1}
              role="dialog"
            >
              <div id="modal">
                <header>
                  <button
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={onCloseModal}
                  >
                    <Image
                      src="/images/close-button.svg"
                      alt="Product"
                      width="12px"
                      height="12px"
                    />
                  </button>
                </header>
                {children}
              </div>
            </section>
          </ModalContainer>,
          document.body
        )}
      </>
    );
  }
}
