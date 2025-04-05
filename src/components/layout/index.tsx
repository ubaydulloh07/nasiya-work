import { Outlet } from "react-router"
import Header from "./Header"

function Layout() {
    return (
        <>
            <main>
                <Outlet />
            </main>
            <Header />
           
        </>
    )
}

export default Layout