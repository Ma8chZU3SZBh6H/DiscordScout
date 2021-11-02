import { useEffect } from "react";
import useRouter from "./hooks/useRouter";
import useUser from "./hooks/useUser";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { RouterPages } from "./state/types/routerTypes";

import { ipcRenderer } from "electron";
import { LoginHandlerResponse, UserState } from "../types";

//let socket: Socket | null = null;

function App() {
  const router = useRouter();
  const userState = useUser();

  useEffect(() => {
    ipcRenderer.on("login", (event, args: LoginHandlerResponse) => {
      console.log("LOGIN HANDLER RESPONSE", args);
      if (args.success) {
        userState.tokenValid(args.user);
      } else {
        router.loginPage();
      }
    });
  }, []);

  useEffect(() => {
    if (userState.user.token !== null) {
      ipcRenderer.invoke("login", userState.user);
    }
  }, [userState.user.token]);

  useEffect(() => {
    console.log(userState.user.loggedin);
    if (userState.user.loggedin) {
      router.dashboardPage();
    }
  }, [userState.user.loggedin]);

  switch (router.router.page) {
    case RouterPages.DASHBOARD:
      return <Dashboard />;
    case RouterPages.LOGIN:
      return <Login />;
    default:
      return <div>LOADING</div>;
  }
}

export default App;
