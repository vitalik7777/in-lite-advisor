import {useMemo} from 'react';
import TagManager from 'react-gtm-module'

export default function useGTM() {

    const events = {
        nextStep: 'click_next_step',
        previousStep: 'click_previous_step',
        goToStepGardenElement: 'click_go_to_step_garden_elements',
        selectGardenElement: 'select_garden_element',
        selectAnswer: 'select_answer',
        moreInformation: 'click_more_information',
        chooseProduct: 'click_choose_product'
    };

    const label = {
        click: 'click on the button ',
        previous: 'click previous button from ',
        selectElement: 'click on the garden element '
    };


    function push(tagManagerArgs) {
        TagManager.dataLayer({
            dataLayer: tagManagerArgs
        });
    }

    const actionsGTM = useMemo(() => {
        return {push}
    }, []);

    return {
        dataGTM: {
            events,
            label
        },
        actionsGTM
    };
}
