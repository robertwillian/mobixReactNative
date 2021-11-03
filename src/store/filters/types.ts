export enum FilterActionTypes {
    FILTER_TEXT_CHANGE = "filter/TEXT_CHANGE",
    FILTER_TOGGLE_TYPE = "filter/TOGGLE_TYPE",
    FILTER_SET_TYPES = "filter/SET_TYPES",
    FILTER_CLEAR = "filter/CLEAR",
    FILTER_TOGGLE_PANNEL = "filter/TOGGLE_PANNEL",
}

export interface IFilterState {
    text?: string;
    types: string[],
    pannelOpen?: boolean;
}