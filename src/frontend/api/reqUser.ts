import reqGet from "../../axios/reqGet";
import { PurpleUser } from "../../types";

async function reqUser(id: string | number, token: string) {
  return await reqGet<PurpleUser>(`https://discord.com/api/v9/users/${id}`, {
    headers: {
      authorization: token,
    },
  });
}

export default reqUser;
