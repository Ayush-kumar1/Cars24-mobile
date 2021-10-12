import * as CONSTANTS from "./constants";

export const initialValue = {
    sortByPrice: null,
    filterByFirstOwner: false,
    filterBySecondOwner: false,
    filterByThirdOwner: false,
    filterByFourthOwner: false,
    filterByPetrol: false,
    filterByDiesel: false,
}

export const filterReducer = (state, action) => {
    switch (action.type) {
        case CONSTANTS.SORT_BY_PRICE:
            return {
                ...state,
                sortByPrice: action.payload
            }

        case CONSTANTS.FILTER_BY_FIRST_OWNER:
            return {
                ...state,
                filterByFirstOwner: !state.filterByFirstOwner
            }

        case CONSTANTS.FILTER_BY_SECOND_OWNER:
            return {
                ...state,
                filterBySecondOwner: !state.filterBySecondOwner
            }

        case CONSTANTS.FILTER_BY_THIRD_OWNER:
            return {
                ...state,
                filterByThirdOwner: !state.filterByThirdOwner
            }

        case CONSTANTS.FILTER_BY_FOURTH_OWNER:
            return {
                ...state,
                filterByFourthOwner: !state.filterByFourthOwner
            }

        case CONSTANTS.FILTER_BY_PETROL:
            return {
                ...state,
                filterByPetrol: !state.filterByPetrol
            }

        case CONSTANTS.FILTER_BY_DIESEL:
            return {
                ...state,
                filterByDiesel: !state.filterByDiesel
            }

        default:
            return state
    }
}