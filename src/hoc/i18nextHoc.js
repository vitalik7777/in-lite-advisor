import React from "react";
import {withNamespaces} from "react-i18next";

export const i18nextWithNamespaces = (Component) => {
    class I18nextComponent extends React.Component {
        render() {
            const ComponentWithNamespaces = withNamespaces()(Component);

            return <ComponentWithNamespaces {...this.props}/>
        }
    }

    return I18nextComponent;
};