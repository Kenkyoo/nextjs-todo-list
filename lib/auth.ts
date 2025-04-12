import { cookies } from "next/headers";
import * as jose from "jose";

export async function userId() {
  const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL;

  const token = (await cookies()).get("hanko")?.value;
  const payload = jose.decodeJwt(token ?? "");

  const userID = payload.sub;

  const response = await fetch(`${hankoApiUrl}/users/${userID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return null;
  }

  const userData = await response.json();
  return userData.id;
}
