import { constants } from "./index";

const initState = {
    job: '',
    jobs: []
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
        case constants.UPDATE_JOB: {
            const newJob = action.payload.newJob;
            const jobIndex = action.payload.index;
            // console.log("newJob: ", newJob);
            
            const newJobs = [...state.jobs];
            // console.log("newJobs[jobIndex]: ", newJobs[jobIndex]);


            newJobs[jobIndex] = newJob;
            // console.log("newJobs: ", newJobs);

            return {
                ...state,
                // jobs: newJobs
                jobs: ["mot", "hai", "ba"]
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
