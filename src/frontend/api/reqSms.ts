import { LoginResponseSuccessful, Response } from "../../types";
import reqPost from "../../axios/reqPost";
import req from "../../axios/reqWrap";

async function reqSms(
  code: string,
  ticket: string
): Promise<Response<LoginResponseSuccessful>> {
  return await reqPost<LoginResponseSuccessful>(
    "https://discord.com/api/v9/auth/mfa/sms",
    { code, ticket }
  );
}

export default reqSms;
