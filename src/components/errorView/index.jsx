import React, {Component} from 'react';

const messages = new Map()
    .set('notFoundGardenElement', 'There are no any garden elements. Please try again.')
    .set('notFoundAnswers', 'There are no any answers. Please try to choose another category.')
    .set('notFoundProducts', 'There are no any available products');

class ErrorView extends Component {
    render() {
        const {notFoundGardenElement, notFoundAnswers, notFoundProducts, cssClass} = this.props;

        const message = notFoundGardenElement
            ? messages.get('notFoundGardenElement')
            : notFoundAnswers
                ? messages.get('notFoundAnswers')
                : notFoundProducts
                    ? messages.get('notFoundProducts')
                    : messages.get('internalError');

        return <div className={cssClass + ' error'}>{message}</div>;
    }
}

export default ErrorView;
