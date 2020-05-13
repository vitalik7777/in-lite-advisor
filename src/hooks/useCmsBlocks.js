import {useState, useMemo} from "react";
import {useApolloClient} from "@apollo/react-hooks";
import {getCmsBlockAPI} from "../api/api";

export default function useCmsBlock() {
    const [block, setBlock] = useState(null);

    const client = useApolloClient();

    function getBlock(id) {
        return getCmsBlockAPI(client, id).then(setBlock);
    }

    const actions = useMemo(() => {
        return {getBlock}
    }, []);

    return {
        data: {
            block,
        },
        actions
    };
}