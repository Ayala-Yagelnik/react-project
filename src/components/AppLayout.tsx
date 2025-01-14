import { Outlet } from "react-router"
import Nav from "./Nav"

const AppLayout = () => {
    return (<>
        {/* <Outlet /> */}
        {/* \\\\\///// */}
        <Nav></Nav>
        <Outlet />
    </>)
}

export default AppLayout