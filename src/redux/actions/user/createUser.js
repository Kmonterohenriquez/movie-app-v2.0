import { CREATE_USER } from '../types';

export default function createUser(userObj){
    return {
        type: CREATE_USER,
        payload: userObj
    }
}

