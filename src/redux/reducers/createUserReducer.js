import { NEW_USER } from '../actions/types';

const initialState = {
	newUser: []
};

export default function createUserReducer(state = initialState, action) {
	switch (action.type) {
		case NEW_USER:
			return { ...state, newUser: action.payload };
		default:
			return state;
	}
}
