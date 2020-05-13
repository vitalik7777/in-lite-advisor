import React, {useContext} from 'react';
import TranslationContext from "../../context/translateContext";

const messages = new Map()
    .set('notFoundGardenElement', 'There are no any garden elements.')
    .set('notFoundAnswers', 'There are no any answers. Please try to choose another category.')
    .set('notFoundProducts', 'There are no any available products.');


export default function ErrorView(props) {
    const {t} = useContext(TranslationContext);

    const {notFoundGardenElement, notFoundAnswers, notFoundProducts, cssClass} = props;

    const message = notFoundGardenElement
        ? messages.get('notFoundGardenElement')
        : notFoundAnswers
            ? messages.get('notFoundAnswers')
            : notFoundProducts
                ? messages.get('notFoundProducts')
                : messages.get('internalError');

    return <div className={cssClass + ' error'}>{t(message)}</div>;
}
