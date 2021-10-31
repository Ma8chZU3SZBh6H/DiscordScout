import { useEffect } from "react";
import useRouter from "./hooks/useRouter";
import useUser from "./hooks/useUser";
import Login from "./pages/Login";
import { RouterPages } from "./state/types/routerTypes";

function App() {
    const router = useRouter();
    const user = useUser();
    useEffect(()=>{
        if (user.user.token !== null) {
            router.dashboardPage();
        }
        else{
            router.loginPage();
        }
    }, [user.user.token]);

    switch (router.router.page) {
        case RouterPages.DASHBOARD:
            return <div><h1>DASHBOARD</h1><button onClick={()=>user.logout()}>LOGOUT</button></div>;
        case RouterPages.LOGIN:
            return <Login/>
        default:
            return <div>LOADING</div>;
    }
}

export default App;