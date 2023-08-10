import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout(){

    const {user,token} = useStateContext()

    if(!token){
        return <Navigate to="/login"/>
    }

    const onLogout = (ev) => {
        ev.preventDefault();
    }

    return(
        <div id="defaultLayout">
            <aside>
                <Link to = "/dashboard">Dasboard</Link>
                <Link to = "/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        {user.name}
                         
                        <a href="#" onClick={onLogout} className="btn_logout">Logout</a>
                    </div>
                    <main>
                        <Outlet/>
                    </main>
                </header>
            </div>
        </div>
    )
}