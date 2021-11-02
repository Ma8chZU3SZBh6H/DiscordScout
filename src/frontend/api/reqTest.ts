import { Response } from "../../types";
import reqGet from "../../axios/reqGet";

interface TestResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function reqTest(): Promise<Response<TestResponse>> {
  return await reqGet<TestResponse>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
}

export default reqTest;
