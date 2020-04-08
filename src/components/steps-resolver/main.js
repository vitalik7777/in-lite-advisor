import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class StepResolver extends Component {
    constructor(props) {
        super(props);

        this.state = {
            compState: this.props.startAtStep,
            navState: this.getNavStates(this.props.startAtStep, this.props.steps.length)
        };

        // if user did not give a custom nextTextOnFinalActionStep, the nextButtonText becomes the default
        this.nextTextOnFinalActionStep = (this.props.nextTextOnFinalActionStep) ? this.props.nextTextOnFinalActionStep : this.props.nextButtonText;
    }


    // update the header nav states via classes so they can be styled via css
    getNavStates(indx, length) {
        const styles = [];

        for (let i = 0; i < length; i++) {
            if (i < indx || (indx === length - 1)) {
                styles.push('done');
            } else if (i === indx) {
                styles.push('doing');
            } else {
                styles.push('todo');
            }
        }

        return {current: indx, styles};
    }


    // which step are we in?
    checkNavState(nextStep) {
        if (this.props.onStepChange) {
            this.props.onStepChange(nextStep);
        }
    }

    // set the nav state
    setNavState(next) {
        this.setState({navState: this.getNavStates(next, this.props.steps.length)});

        if (next < this.props.steps.length) {
            this.setState({compState: next});
        }

        this.checkNavState(next);
    }

    // this utility method lets Child components invoke a direct jump to another step
    jumpToStep(evt) {
        if (typeof evt.target === 'undefined') {
            // a child step wants to invoke a jump between steps. in this case 'evt' is the numeric step number and not the JS event
            this.setNavState(evt);
        } else { // the main navigation step ui is invoking a jump between steps
            // if stepsNavigation is turned off or user clicked on existing step again (on step 2 and clicked on 2 again) then ignore
            if (!this.props.stepsNavigation || evt.target.value === this.state.compState) {
                evt.preventDefault();
                evt.stopPropagation();

                return;
            }

            // evt is a react event so we need to persist it as we deal with aync promises which nullifies these events (https://facebook.github.io/react/docs/events.html#event-pooling)
            evt.persist();
        }
    }

    // move next via next button
    next() {
        this.setNavState(this.state.compState + 1);
    }

    // move behind via previous button
    previous() {
        if (this.state.compState > 0) {
            this.setNavState(this.state.compState - 1);
        }
    }


    // get the classmame of steps
    getClassName(className, i) {
        let liClassName = `${className}-${this.state.navState.styles[i]}`;

        // if step ui based navigation is disabled, then dont highlight step
        if (!this.props.stepsNavigation) {
            liClassName += ' no-hl';
        }

        return liClassName;
    }

    // render the steps as stepsNavigation
    renderSteps() {
        return this.props.steps.map((s, i) => (
            <li className={this.getClassName('progerss-bar', i)} onClick={(evt) => {
                this.jumpToStep(evt);
            }} key={i} value={i}>
            </li>
        ));
    }

    // main render of StepResolver container
    render() {
        // clone the step component dynamically and tag it as activeComponent so we can validate it on next. also bind the jumpToStep piping method
        const cloneExtensions = {
            jumpToStep: (t) => {
                this.jumpToStep(t);
            },
            next: () => {
                this.next();
            },
            previous: () => {
                this.previous();
            },
            steps: this.props.steps,
            activeStep: this.state.compState
        };

        const componentPointer = this.props.steps[this.state.compState].component;

        // can only update refs if its a regular React component (not a pure component), so lets check that
        if (componentPointer instanceof Component
            || (componentPointer.type && componentPointer.type.prototype instanceof Component)) {
            // unit test deteceted that instanceof Component can be in either of these locations so test both (not sure why this is the case)
            cloneExtensions.ref = 'activeComponent';
        }


        const compToRender = React.cloneElement(componentPointer, cloneExtensions);

        let firstStep = this.state.compState === 0 ? ' preview-step' : '';
        let lastStep = this.props.steps[this.state.compState].name === this.props.steps.slice(-1).pop().name ? ' last-step' : '';

        let activeStep = this.props.steps[this.state.compState].name;

        return (
            <div className={"in-lite-advisor" + lastStep}>
                <div className={"steps-wrapper" + firstStep + " " + activeStep}>
                    {compToRender}
                    <ul className="progress-bar">
                        {this.renderSteps()}
                    </ul>
                </div>
            </div>
        );
    }
}

StepResolver.defaultProps = {
    stepsNavigation: true,
    preventEnterSubmission: false,
    startAtStep: 0,
    nextButtonText: 'Next',
    nextButtonCls: 'btn btn-prev btn-primary btn-lg pull-right',
    backButtonText: 'Previous',
    backButtonCls: 'btn btn-next btn-primary btn-lg pull-left',
};

StepResolver.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]).isRequired,
        component: PropTypes.element.isRequired
    })).isRequired,
    stepsNavigation: PropTypes.bool,
    preventEnterSubmission: PropTypes.bool,
    startAtStep: PropTypes.number,
    nextButtonText: PropTypes.string,
    nextButtonCls: PropTypes.string,
    backButtonCls: PropTypes.string,
    backButtonText: PropTypes.string,
    onStepChange: PropTypes.func
};