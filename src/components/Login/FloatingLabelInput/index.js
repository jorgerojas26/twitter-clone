import { useState } from 'react';
import { StyledMainWrapper } from './styles';

const FloatingLabelInput = ({ placeholder, ...rest }) => {
    const [labelActive, setLabelActive] = useState('');

    const handleBlur = ({ target: { value } }) => {
        setLabelActive(!!value);
    };

    return (
        <StyledMainWrapper onBlur={handleBlur}>
            <input {...rest} />
            <label className={labelActive}>{placeholder}</label>
        </StyledMainWrapper>
    );
};

export default FloatingLabelInput;
