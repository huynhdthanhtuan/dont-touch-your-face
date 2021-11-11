import { useReducer } from "react";
import { StoreContext, initState, reducer } from "./index";

function Provider ({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

export default Provider;
