import { StyledMainWrapper } from './styles';

const FloatingLabelInput = ({ placeholder, ...rest }) => {
    return (
        <StyledMainWrapper
            onBlur={(event) => {
                let input = event.target;
                if (input.value.length) {
                    input.nextSibling.classList.add('active');
                } else {
                    input.nextSibling.classList.remove('active');
                }
            }}
        >
            <input {...rest} />
            <label>{placeholder}</label>
        </StyledMainWrapper>
    );
};

export default FloatingLabelInput;
