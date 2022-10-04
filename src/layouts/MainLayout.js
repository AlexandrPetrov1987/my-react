import {Outlet} from "react-router-dom";

import {Headers} from "../components";

const MainLayout = () => {

    return (
        <div>
            <Headers/>
            <Outlet/>
        </div>
    )
}
export {MainLayout};