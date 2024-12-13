"use client";

import { ThemeProvider } from "./theme-provider";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ childen }: { childen: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>{childen}</SessionProvider>
    </ThemeProvider>
  )
}