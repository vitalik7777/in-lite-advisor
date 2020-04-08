import React, {Component} from 'react';

const messages = new Map()
    .set('internalError', 'Something went wrong. Please try again.');

class ErrorView extends Component {
    render() {
        const message = messages.get('internalError');

        return <h1>{message}</h1>;
    }
}

export default ErrorView;
