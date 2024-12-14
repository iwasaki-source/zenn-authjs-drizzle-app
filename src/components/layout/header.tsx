import Link from "next/link"
import { ThemeToggle } from "../theme-toggle"
import { Suspense } from "react"
import { Icons } from "../icons"
import { UserProfile } from "../auth/user-profile"

export const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between py-6 px-4">
      <Link href='/' className="font-extrabold text-3xl">
        App
      </Link>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Suspense
          fallback={<Icons.Loader2 className="h-100 w-10 animate-spin" />}
        >
          <UserProfile />
        </Suspense>
      </div>
    </header>
  )
}