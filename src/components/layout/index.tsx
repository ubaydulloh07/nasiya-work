import { Outlet } from "react-router"
import BottomNav from "./BottomNav"

function Layout() {
    return (
        <>
            <main>
                <Outlet />
            </main>
            <BottomNav />
        </>
    )
}

export default Layout