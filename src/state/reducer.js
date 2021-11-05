import { constants } from "./index";

const initState = {
    job: '',
    jobs: [],
    jobInUpdateInput: ''
}

function reducer (state, action) {
    switch(action.type) {
        case constants.SET_JOB: {
            return {
                ...state,
                job: action.payload
            }
        }
        case constants.ADD_JOB: {
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        }
        case constants.SET_JOB_IN_UPDATE_INPUT: {
            return {
                ...state,
                jobInUpdateInput: action.payload.jobInUpdateInput
            }
        }
        case constants.UPDATE_JOB: {
            const newJob = action.payload.newJob;
            const index = action.payload.index;
            const newJobs = [...state.jobs];
            newJobs[index] = newJob;

            return {
                ...state,
                jobs: newJobs
            }
        }
        case constants.DELETE_JOB: {
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);

            return {
                ...state,
                jobs: newJobs
            }
        }
        default:
            throw new Error("Invalid action.");
    }
}

export { initState };
export default reducer;
