import { Dispatch, createContext } from "react"
import { userType } from "../models/userType";

type Action = {
    type: 'LOGIN_USER',
    data: userType
} | {
    type: 'UPDATE_USER',
    data: Partial<userType> & { email: String }
} | {
    type: 'DELETE_USER',
    email: String
}

export const UserContext = createContext<{
    user: userType;
    userDispatch: Dispatch<Action>;
}>({
    user: {address:'',email:'',name:'',password:'',phone:''},
    userDispatch: () => null
});

export default (state: userType, action: Action): userType=> {
    switch (action.type) {
        case 'LOGIN_USER':
            return action.data;
        case 'UPDATE_USER':
            return {...state,
                password:action.data.password?action.data.password:state.password,
                name:action.data.name?action.data.name:state.name,
                phone:action.data.phone?action.data.phone:state.phone,
                address:action.data.address?action.data.address:state.address,
            }
        case 'DELETE_USER':
            return {...state}
        default:
            return state;
    }
}


