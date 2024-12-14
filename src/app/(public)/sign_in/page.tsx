"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = async () => {
    try {
      setIsLoading(true);
      await signIn("google", { callbackUrl: "/profile" });
    } catch (error) {
      console.error("Failed to sign in:", error);
      setIsLoading(false);
    }
  };

  const GoogleIcon = Icons["Google"];

  return (
    <main className="h-dvh flex items-center justify-center px-4">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">ログイン</h1>
          <p className="text-sm text-muted-foreground">
            新規登録、ログインのどちらも以下のリンクから行うことができます。
          </p>
        </div>
        <Button onClick={() => handleSignin()} disabled={isLoading}>
          {!isLoading && <GoogleIcon className="w-5 h-5 mr-2" />}
          {isLoading ? "Google のログイン画面に移動中.." : "Google でログイン"}
        </Button>
      </div>
    </main>
  )
}