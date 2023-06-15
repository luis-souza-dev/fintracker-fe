import Topbar from "../topbar"
import { Outlet } from "react-router-dom";
function MainPanel() {

    return (
        <section className="col-start-2 col-span-full row-span-full bg-[#052636]">
          <Topbar />
          <section>
                <Outlet />
          </section>
        </section>
    )
}

export default MainPanel
