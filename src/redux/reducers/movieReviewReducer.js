import {ITEM_REVIEW} from '../actions/types'

const initialState ={
    movieReview: ['hola']
}

export default function movieReviewReducer(state= initialState, action ){
    switch(action.type){
        case ITEM_REVIEW:
            return {...state, reviews: action.payload}
        default:
            return state
    }
}