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
    }, []);
    switch (router.router.page) {
        case RouterPages.DASHBOARD:
            return <div>DASHBOARD</div>;
        case RouterPages.LOGIN:
            return <Login/>
        default:
            return <div>LOADING</div>;
    }
}

export default App;