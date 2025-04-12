"use client";

import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL as string;

if (!hankoApi) {
  throw new Error("NEXT_PUBLIC_HANKO_API_URL no está definido");
}

export default function HankoAuth() {
  const router = useRouter();

  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => setHanko(new Hanko(hankoApi)), []);

  const redirectAfterLogin = useCallback(() => {
    // successfully logged in, redirect to a page in your application
    router.replace("/todo");
  }, [router]);

  useEffect(
    () =>
      hanko?.onSessionCreated(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
      console.log(error);
    });
  }, []);

  return <hanko-auth />;
}
