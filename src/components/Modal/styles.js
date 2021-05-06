import styled from 'styled-components';

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    ${(props) =>
        props.backdropShadow &&
        `
    background: rgba(0, 0, 0, 0.4);
    `}
`;
