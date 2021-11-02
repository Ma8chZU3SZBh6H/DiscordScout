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
  const [currentDashboardPage, setCurrentDashboardPage] = useState(0);
  const [pagedDashboardChannels, setPagedDashboardChannels] = useState([]);

  const allDashboardChannels = userState.user.data.private_channels.map((c) => {
    return { id: c.id, name: null, friend: c.recipient_ids[0] };
  });
  const pageCount =
    (allDashboardChannels.length - (allDashboardChannels.length % pageLimit)) /
    pageLimit;

  const loadDashboardChannelPage = async () => {
    let slicedChannels = [];

    const channelCount = allDashboardChannels.length;
    const arraySliceStart = currentDashboardPage * pageLimit;
    if (arraySliceStart < channelCount) {
      let arraySliceEnd =
        arraySliceStart + pageLimit < channelCount
          ? arraySliceStart + pageLimit
          : channelCount;
      console.log(arraySliceStart, arraySliceEnd);
      slicedChannels = allDashboardChannels.slice(
        arraySliceStart,
        arraySliceEnd
      );
    } else {
      slicedChannels = allDashboardChannels.slice(
        channelCount - pageLimit,
        channelCount
      );
    }
    console.log(slicedChannels.length);
    for (let index = 0; index < slicedChannels.length; index++) {
      const user = await reqUser(
        slicedChannels[index].friend,
        userState.user.token
      );
      slicedChannels[index].name = user.data.username;
      console.log(slicedChannels[index].name);
      setPagedDashboardChannels([...slicedChannels]);
    }
  };

  useEffect(() => {
    loadDashboardChannelPage();
  }, [currentDashboardPage]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <h1>{userState.user.data.user?.username}</h1>
        <button onClick={() => userState.logout()}>LOGOUT</button>
      </div>
      <div className="flex flex-col gap-3">
        {pagedDashboardChannels.map((channel: DashboardChannel, index) => (
          <button
            className="px-2 py-1 border rounded transition hover:bg-blue-200 cursor-pointer"
            key={index}
          >
            {channel.name ?? "Loading..."}
          </button>
        ))}
      </div>
      <div className="flex justify-evenly">
        {Array(pageCount)
          .fill(0)
          .map((value, index) => (
            <button
              onClick={() => setCurrentDashboardPage(index)}
              key={index}
              className={`${
                currentDashboardPage == index ? "bg-blue-200" : ""
              } px-2 border rounded transition hover:bg-blue-200 cursor-pointer`}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
