import Link from "next/link"
import { ThemeToggle } from "../theme-toggle"

export const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between py-6 px-4">
      <Link href='/' className="font-extrabold text-3xl">
        App
      </Link>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  )
}