import Image from "next/image";
import Link from "next/link";

export default function FooterDown() {
  return (
    <div className="bg-gray-950 py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            <span>
              Copyright ©{" "}
              <Link href="/" className="hover:text-white">
                Ayo
              </Link>{" "}
              All Rights Reserved.{" "}
              <Link
                target="_blank"
                href="https://ali-el-shoraa.netlify.app"
                className="text-brand-secoundry hover:text-brand-secoundry/90"
              >
                Ali El-Shoraa
              </Link>
            </span>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/image/logo.png"
              alt="Payment Methods"
              width={300}
              height={40}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
