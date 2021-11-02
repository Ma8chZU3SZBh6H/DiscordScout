import axios from "axios";
import { Response } from "../types";
import req from "./reqWrap";

async function reqPost<T = any>(url, data): Promise<Response<T>> {
  return await req<T>(async () => await axios.post<T>(url, data));
}

export default reqPost;
