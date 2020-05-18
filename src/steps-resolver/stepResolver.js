import React, {useMemo, useState} from 'react';
import StepContext from "../context/stepsContext";

export default function StepResolver({initialised, steps}) {
    const [compState, setCompState] = useState(0);
    const [cssClass, setCssClass] = useState('');
    const [initStatus, setInitStatus] = useState(initialised);
    const componentToRender = steps[compState].component;

    const getNavStates = (indx, length) => {
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
    };

    const [navState, setNavState] = useState(getNavStates(0, steps.length));


    const setNavStates = (next) => {
        setNavState(getNavStates(next, steps.length));

        if (next < steps.length) {
            setCompState(next);
        }
    };


    const getClassName = (className, i) => {
        return `${className}-${navState.styles[i]}`;
    };

    const renderSteps = () => {
        return steps.map((s, i) => (
            <li className={getClassName('progerss-bar', i)} key={i} value={i}/>
        ));
    };

    const handlerCssClass = (cssClass) => {
        return setCssClass(cssClass);
    };

    const next = () => {
        setNavStates(compState + 1);
        setInitStatus(false);
    };

    const previous = () => {
        if (compState > 0) {
            setNavStates(compState - 1);
        }
    };

    const jumpToStep = (index) => {
        setNavStates(index);
        setInitStatus(false);
    };

    let memoStepActions = useMemo(() => {
        return {
            jumpToStep: (t) => {
                jumpToStep(t);
            },
            next: () => {
                next();
            },
            previous: () => {
                previous();
            },
            handlerCssClass: (cssClass) => {
                handlerCssClass(cssClass);
            },
            activeStep: compState
        };
    }, [jumpToStep, next, previous, handlerCssClass, compState]);


    const lastStep = steps[compState].name === steps.slice(-1).pop().name ? ' last-step' : '';
    const activeStep = steps[compState].name;
    const initializedApp = initStatus ? 'initialized-app ' : '';


    return (
        <div className={initializedApp + "in-lite-advisor" + lastStep + " " + cssClass}>
            <div className={"steps-wrapper" + " " + activeStep}>
                <StepContext.Provider value={memoStepActions}>
                    {componentToRender}
                </StepContext.Provider>
                <ul className="progress-bar">
                    {renderSteps()}
                </ul>
            </div>
        </div>
    )
}