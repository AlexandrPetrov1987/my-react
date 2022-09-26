import {Outlet} from "react-router-dom";

import {Headers} from "../components";

const MainLayout = () => {

    return (
        <div>
            <Headers/>
            <h2>Content</h2>
            <Outlet/>
        </div>
    )
}
export {MainLayout};