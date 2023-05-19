import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const registerREsponse = await api.post("/register", {
    code,
  });
  const { token } = registerREsponse.data;
  const redirectURL = new URL("/", request.url);
  const cookieExpiresInSeconds = 60 * 60 * 24 * 30;

  return NextResponse.redirect(redirectURL, {
    headers: {
      "Set-Cookie": `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  });

  console.log(token);
}
