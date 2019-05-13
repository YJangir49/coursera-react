import {DISHES} from '../shared/dishes'
import {LEADERS} from '../shared/leaders'
import {COMMENTS} from '../shared/comments'
import {PROMOTIONS} from '../shared/promotion'

export const initialState={
    dishes: DISHES,
    leaders: LEADERS,
    comments: COMMENTS,
    promotions: PROMOTIONS
};

export const Reducer = (state=initialState, action) => {
        return state;
};