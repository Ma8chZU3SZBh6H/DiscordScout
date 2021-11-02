import useUser from "../hooks/useUser";

function Dashboard() {
  const user = useUser();
  return (
    <div>
      <div className="flex justify-between">
        <h1>DASHBOARD</h1>
        <button onClick={() => user.logout()}>LOGOUT</button>
      </div>
    </div>
  );
}

export default Dashboard;
