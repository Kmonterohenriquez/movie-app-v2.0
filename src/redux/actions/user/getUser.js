import { GET_USER } from '../types';

export default function getUser(userObj){
    return {
        type: GET_USER,
        payload: userObj
    }
}

