import { createPortal } from "react-dom";
import styled from "styled-components";

import { scale } from "@/styles/animations";
import CloseModalButton from "./CloseModalButton";

type ModalT = {
  open: boolean;
  onClose: () => void;
  showCloseBtn?: boolean;
  children: React.ReactNode;
};

const AppModal = styled.div`
  .modal-box {
    position: fixed;
    inset: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
  }

  .modal-window {
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadow.radial_lg};
    border-radius: 1rem;
    overflow: hidden;
    min-width: 30rem;
    min-height: 15rem;
    opacity: 0;
    transform: scale(0.7);
    animation: ${scale()} 0.3s ease-out forwards;
  }

  .modal-box__close {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 2rem;
    font-size: 28px;
  }

  .modal-box__content {
    padding: 0rem 2rem 2rem 2rem;
    position: relative;
  }
`;

const Modal: React.FC<ModalT> = ({ children, onClose, open, showCloseBtn }) => {
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return createPortal(
    <AppModal className={open ? "scroll-block" : ""}>
      {open && (
        <div className="modal-box" onClick={onClose}>
          <div className="modal-window" onClick={stopPropagation}>
            {showCloseBtn && <CloseModalButton onClose={onClose} />}

            <div className="modal-box__content">{children}</div>
          </div>
        </div>
      )}
    </AppModal>,
    document.getElementById("portal") as HTMLDivElement
  );
};

export default Modal;
