import { useEffect, useState } from "react";
import delete_dms from "../api/reqDestroyer";
import useRouter from "../hooks/useRouter";
import useUser from "../hooks/useUser";

function Destroyer() {
  const router = useRouter();
  const userState = useUser();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // delete_dms(userState.user.token, userState.user.data, router.router.params.destroy, ()=>{
    // });
    // (async () => {
    //   let count = 0;
    //   while (true) {
    //     count++;
    //     console.log(count);
    //     await new Promise((r) => setTimeout(r, 1000));
    //   }
    // })();
  }, []);

  return (
    <div className="grid items-center h-screen justify-center">
      <div className="flex flex-col gap-1">
        <div>DESTROYING {router.router.params.name}</div>
        <div>MESSAGES DELETED: {counter}</div>
        <button
          onClick={() => router.dashboardPage()}
          className="py-1 px-2 border rounded transition hover:bg-blue-200 cursor-pointer"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default Destroyer;
