import Topbar from "../topbar"
import { Outlet } from "react-router-dom";
function MainPanel() {

    return (
        <section className="col-start-2 col-span-full h-screen max-h-screen bg-[#052636] overflow-y-hidden">
          <Topbar />
          <Outlet />
        </section>
    )
}

export default MainPanel
