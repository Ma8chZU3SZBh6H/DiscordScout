import axios from "axios";
import { LoginResponse, LoginResponseSuccessful, Response } from "../types";
import reqPost from "./reqPost";
import req from "./reqWrap";

async function reqMfa(code:string, ticket: string) : Promise<Response<LoginResponseSuccessful>> {
    return await reqPost<LoginResponseSuccessful>("https://discord.com/api/v9/auth/mfa/totp", {code, ticket});
}

export default reqMfa;