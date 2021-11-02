import axios from "axios";
import { Response } from "../types";
import req from "./reqWrap";

async function reqGet<T = any>(url) : Promise<Response<T>>  {
    return await req<T>(async () => await axios.get<T>(url))
}

export default reqGet;