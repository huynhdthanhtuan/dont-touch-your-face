
function logger (reducer) {
    return (state, action) => {
        // console.group(action.type);

        // console.log("prevState: ", state);
        // console.log("action: ", action);

        const newState = reducer(state, action);
        // console.log("nextState: ", newState);

        // console.groupEnd();

        return newState;
    }
}

export default logger;
