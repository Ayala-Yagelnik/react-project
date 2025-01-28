import { Dispatch, createContext } from "react"
import { userType } from "../models/userType";

export type Action = {
    type: 'CREATE_USER',
    data: userType
} | {
    type: 'UPDATE_USER',
    data: Partial<userType> & { email: String }
} | {
    type: 'DELETE_USER',
    data: string
}

export const UserContext = createContext<{
    user: userType;
    userDispatch: Dispatch<Action>;
}>({
    user: {
        address: '',
        email: '',
        name: '',
        password: '',
        phone: '',
        id: 0
    },
    userDispatch: () => null
});

export default (state: userType, action: Action): userType => {
    console.log(action.data)
    switch (action.type) {
        case 'CREATE_USER':
            return action.data;
        case 'UPDATE_USER':
            return {
                ...state,
                ...action.data
            }
        case 'DELETE_USER':
            return { ...state }
        default:
            return state;
    }
}


