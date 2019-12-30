import { GET_USER } from '../actions/types';

const initialState = {
	user: {
		// username: '',
		email: 'hola', 
		password: 'hola' 
	}
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USER:
			return { ...state, user: action.payload };
		default:
			return state;
	}
}
