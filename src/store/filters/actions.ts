import { FilterActionTypes } from "./types";

export const actionFilterChangeText = (text: string) => ({
    type: FilterActionTypes.FILTER_TEXT_CHANGE,
    text
})

export const actionFilterToggleType = (toggleType: string) => ({
    type: FilterActionTypes.FILTER_TOGGLE_TYPE,
    toggleType
})

export const actionFilterSetTypes = (types: string[]) => ({
    type: FilterActionTypes.FILTER_SET_TYPES,
    types
})

export const actionFilterClear = () => ({
    type: FilterActionTypes.FILTER_CLEAR
})

export const actionFilterTogglePannel = () => ({
    type: FilterActionTypes.FILTER_TOGGLE_PANNEL
})