import { Outlet } from "react-router"
import Nav from "./Nav"
import { createContext, Dispatch, useReducer } from "react";
import { userType } from "../models/userType";
import userReducer, { Action, UserContext } from "./userReducer";
export const userCotext = createContext<[userType, Dispatch<Action>]>([{} as userType, () => { }]);
const initialState: userType = {
  address: '',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  phone: '',
  id: 0
};

const AppLayout = () => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (<>

        <UserContext value={{ user: state, userDispatch: dispatch }}>

            <Nav />
            <Outlet />

        </UserContext>

    </>)
}

export default AppLayout