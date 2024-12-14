import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-dvh flex flex-col items-center justify-center p-4 text-center">
      <h1 className="mb-2 text-8xl font-bold">404</h1>
      <p className="mb-4 text-2xl font-semibold">ページが見つかりません。</p>
      <p className="mb-8 text-lg">
        このページはすでに削除されているか、URL が間違っている可能性があります。
      </p>
      <Link href="/top" className="mb-4 inline-block text-sm" prefetch={false}>
        <Button variant="default">トップに戻る</Button>
      </Link>
    </div>
  );
};

export default NotFound;