import { StyledModal } from './styles';

const Modal = ({ children, backdrop, show, close, ...rest }) => {
    return (
        show && (
            <>
                <StyledModal onClick={close} backdrop={backdrop}></StyledModal>
                {children}
            </>
        )
    );
};

export default Modal;
