import { constants } from "./index";

export const setJob = (payload) => ({
    type: constants.SET_JOB,
    payload: payload
})

export const addJob = (payload) => ({
    type: constants.ADD_JOB,
    payload: payload
})

export const updateJob = (payload) => ({
    type: constants.UPDATE_JOB,
    payload: payload
})

export const deleteJob = (payload) => ({
    type: constants.DELETE_JOB,
    payload: payload
})
