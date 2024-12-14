import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();
  if (!session?.user) {
    redirect("/sign_in");
  }

  const nameInitials = session.user.name
    ?.match(/\b(\w)/g)
    ?.join("")
    .slice(0, 2);

  return (
    <main className="mx-auto max-w-5xl px-4">
      <div className="flex items-center space-x-4">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src={session.user.image ?? ""}
            alt="user profile image"
          />
          <AvatarFallback>{nameInitials}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">{session.user.name}</h1>
          <p className="">{session.user.email}</p>
        </div>
      </div>
    </main>
  )
}