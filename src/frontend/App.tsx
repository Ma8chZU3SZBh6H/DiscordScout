import { useEffect } from "react";
import useRouter from "./hooks/useRouter";
import useUser from "./hooks/useUser";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { RouterPages } from "./state/types/routerTypes";
import WebSocket from "ws";

//let socket: Socket | null = null;

function gateway_open(token, config) {
  return {
    op: 2,
    d: {
      token: token,
      capabilities: 125,
      properties: {
        os: config.os,
        browser: "Chrome",
        device: "",
        system_locale: config.language,
        browser_user_agent: `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36`,
        browser_version: "93.0.4577.63",
        os_version: "",
        referrer: "",
        referring_domain: "",
        referrer_current: "",
        referring_domain_current: "",
        release_channel: "stable",
        client_build_number: 97662,
        client_event_source: null,
      },
      presence: { status: "online", since: 0, activities: [], afk: false },
      compress: false,
      client_state: {
        guild_hashes: {},
        highest_last_message_id: "0",
        read_state_version: 0,
        user_guild_settings_version: -1,
      },
    },
  };
}

function App() {
  const router = useRouter();
  const user = useUser();
  useEffect(() => {
    if (user.user.token !== null) {
      //   if (socket?.active) {
      //     socket.close();
      //   }
      //   console.log("hello?");
      //   socket = io("wss://gateway.discord.gg/?encoding=json&v=9");
      //   socket.on(null, (e) => console.log("null", e));
      //   socket.on("READY", (e) => console.log("READY", e));
      //   const ws = new WebSocket("wss://gateway.discord.gg/?encoding=json&v=9");
      //   ws.on("message", () => {});
      router.dashboardPage();
    } else {
      router.loginPage();
    }
  }, [user.user.token]);

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
