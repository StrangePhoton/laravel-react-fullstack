import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout(){

    const {token} = useStateContext()
    if(token){
        return <Navigate to ="/"/>
    }
    return(
        <div>
        
            <div>
            For Guest Users Only
            <Outlet/>
            </div>
            
        </div>

    )
}