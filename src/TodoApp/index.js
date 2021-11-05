import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob }  from "./actions";
import logger  from "./logger";


function TodoApp () {
    const [state, dispatch] = useReducer(logger(reducer), initState);
    const { job, jobs } = state;
    const inputRef = useRef();

    const handleAddJob = (job) => {
        if (job.trim() !== '') {
            // add job
            dispatch(addJob(job));

            // cleanup input
            dispatch(setJob(""));

            // auto focus after add
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <input 
                ref={inputRef}
                value={job}
                placeholder="Job"
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick={() => handleAddJob(job)}>
                ADD
            </button>

            {jobs.map((job, index) => (
                <li key={index}>
                    {job}
                    <span 
                        onClick={() => dispatch(deleteJob(index))}
                        style={{ cursor: 'default' }}
                    >
                        &times;
                    </span>
                </li>
            ))}
        </div>
    )
}

export default TodoApp;
