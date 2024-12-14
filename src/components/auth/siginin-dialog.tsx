"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export const SigninDialog = ({ children }: { children: React.ReactNode }) => {
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
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[22rem] sm:max-w-sm">
        <DialogHeader className="space-y-4">
          <DialogTitle>ログイン</DialogTitle>
          <DialogDescription>
            新規登録、ログインのどちらも以下のリンクから行うことができます。
          </DialogDescription>
        </DialogHeader>
        <Button onClick={() => handleSignin()} disabled={isLoading}>
          {!isLoading && <GoogleIcon className="w-5 h-5 mr-2" />}
          {isLoading ? "Google のログイン画面に移動中..." : "Google でログイン"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};