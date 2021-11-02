import axios from "axios";
import { Response } from "../types";
import req from "./reqWrap";

async function reqGet<T = any>(url, data?): Promise<Response<T>> {
  return await req<T>(async () => await axios.get<T>(url, data));
}

export default reqGet;
