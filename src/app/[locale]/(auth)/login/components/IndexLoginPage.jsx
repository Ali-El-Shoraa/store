import { Link } from "@/i18n/navigation";
import { LoginForm } from "./login";
import Image from "next/image";

export default function IndexLoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          {/* <div className="flex size-6 items-center justify-center"> */}
          {/* <GalleryVerticalEnd className="size-4" /> bg-primary text-primary-foreground  rounded-md */}

          <Image
            src={"/image/logo_black.png"}
            width={1000}
            height={1000}
            className="w-48 h-auto"
            alt="logo"
          />
          {/* </div> */}
          {/* AYO */}
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
