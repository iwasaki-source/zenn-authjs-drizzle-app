import getSession from "@/lib/session"
import { SigninDialog } from "./siginin-dialog";
import { Button } from "../ui/button";
import { UserProfileDropdown } from "./user-profile-dropdown";

export const UserProfile = async () => {
  const session = await getSession();
  if (!session?.user) {
    return (
      <SigninDialog>
        <Button size="sm">ログイン</Button>
      </SigninDialog>
    )
  }

  return <UserProfileDropdown user={session.user} />;
}
