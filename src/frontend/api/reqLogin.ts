import axios from "axios";
import { LoginResponse, Response } from "../types";
import reqPost from "./reqPost";
import req from "./reqWrap";

async function reqLogin(login:string, password:string) : Promise<Response<LoginResponse>> {
    return await reqPost<LoginResponse>("https://discord.com/api/v9/auth/login", {login,password});
}

export default reqLogin;