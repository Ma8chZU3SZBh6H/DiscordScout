import { AxiosError, AxiosResponse } from "axios";
import { Response } from "../types";

interface TestResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function req<T = any>(callback: Function): Promise<Response<T>> {
  try {
    const axiosResponse: AxiosResponse = await callback();
    const response: Response = {
      data: axiosResponse.data,
      error: null,
    };
    return response;
  } catch (e: unknown) {
    const error: AxiosError = e as typeof e & AxiosError;
    const response: Response = {
      data: null,
      error: error,
    };
    return response;
  }
}

export default req;
