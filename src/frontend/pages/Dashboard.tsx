import { useEffect, useState } from "react";
import {
  PrivateChannel,
  PurpleUser,
  Response,
  DashboardChannel,
} from "../../types";
import reqUser from "../../backend/api/reqUser";
import useUser from "../hooks/useUser";
import { ipcRenderer } from "electron";

function Dashboard() {
  const userState = useUser();
  const pageLimit = 10;
  const [priviteChannels, setPrivateChannels] = useState(
    userState.user.data.private_channels.map((c) => {
      return { id: c.id, name: null, friend: c.recipient_ids[0] };
    })
  );

  useEffect(() => {
    const token = userState.user.token;

    (async () => {
      const newPrivateChannels = priviteChannels;
      for (let index = 0; index < newPrivateChannels.length; index++) {
        const user = await reqUser(newPrivateChannels[index].friend, token);
        newPrivateChannels[index].name = user.data.username;
        console.log(newPrivateChannels[index].name);
        setPrivateChannels([...newPrivateChannels]);
      }
    })();
  }, []);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <h1>{userState.user.data.user?.username}</h1>
        <button onClick={() => userState.logout()}>LOGOUT</button>
      </div>
      <div className="flex flex-col gap-3">
        {priviteChannels
          .slice(0, pageLimit)
          .map((channel: DashboardChannel, index) => (
            <button
              className="px-2 py-1 border rounded transition hover:bg-blue-200 cursor-pointer"
              key={index}
            >
              {channel.name ?? "Loading..."}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
