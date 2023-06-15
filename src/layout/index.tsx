import MainPanel from "./main-panel"
import Sidebar from "./sidebar"

function Layout() {

    return (
        <>
            <main className="grid grid-cols-8 grid-rows-6 h-screen bg-[#052636]">
                <Sidebar />
                <MainPanel />
            </main>
        </>
    )
}

export default Layout