import { AxiosError, AxiosResponse } from "axios";
import { Response } from "../types";

interface TestResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function req<T = any>(callback: Function): Promise<Response<T>> {
  while (true) {
    try {
      const axiosResponse: AxiosResponse = await callback();
      const response: Response = {
        data: axiosResponse.data,
        error: null,
      };
      return response;
    } catch (e: unknown) {
      const error: AxiosError = e as typeof e & AxiosError;
      if (error.response?.status == 429) {
        console.log(`Delayed ${error.response.data.retry_after}ms`);
        const time = parseInt(error.response.data.retry_after) * 1000;
        await new Promise((resolve) => setTimeout(resolve, time));
      } else {
        console.log(error);
      }
    }
  }
}

export default req;
