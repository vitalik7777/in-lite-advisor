import React, {useContext} from 'react';
import TranslationContext from '../../context/translateContext';

const Button = (props) => {
    const {text, ...restProps} = props;
    const {t} = useContext(TranslationContext);
    return (
        <button {...restProps}>
            <span>{t(text)}</span>
        </button>
    );
};

export default Button;
