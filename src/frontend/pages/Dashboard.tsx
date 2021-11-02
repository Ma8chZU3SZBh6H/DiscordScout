import useUser from "../hooks/useUser";

function Dashboard() {
  const userState = useUser();
  console.log(userState.user.data?.user.username);
  return (
    <div>
      <div className="flex justify-between">
        <h1>{userState.user.data?.user.username}</h1>
        <button onClick={() => userState.logout()}>LOGOUT</button>
      </div>
    </div>
  );
}

export default Dashboard;
