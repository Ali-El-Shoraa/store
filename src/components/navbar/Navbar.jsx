import { Layers, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import SubNavbar from "./SubNavbar";
import InputNavbar from "./InputNavbar";
import LocaleSwitcher from "../locale-switcher";
import { Link } from "@/i18n/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const cartItemsCount = 3;

export default function Navbar() {
  return (
    <header className="bg-brand-color mb-7">
      <nav className="container h-[100px] flex items-center justify-between gap-5">
        <Link href={`/`} className="h-full flex items-center justify-center">
          <Image src={`/image/logo.png`} alt="logo" width={155} height={39} />
        </Link>

        <div className="flex items-center justify-end md:justify-between gap-7 flex-1">
          <div className="hidden md:block w-full">
            <InputNavbar />
          </div>

          <div className="text-background flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className={`text-background flex items-center gap-6 hover:bg-transparent hover:text-brand-secoundry cursor-pointer`}
            >
              <Layers className="size-7" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`text-background flex items-center gap-6 hover:bg-transparent hover:text-brand-secoundry cursor-pointer`}
            >
              <Star className="size-7" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`text-background flex items-center gap-6 hover:bg-transparent hover:text-brand-secoundry cursor-pointer relative`}
                >
                  <ShoppingBag className="size-7" />
                  {cartItemsCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -right-2 -top-2 h-6 w-6 rounded-full p-0 flex items-center justify-center"
                    >
                      {cartItemsCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>

              {/* className="w-full sm:w-[540px]" */}
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>سلة التسوق</SheetTitle>
                </SheetHeader>

                <div className="mt-8">
                  {/* محتوى السلة هنا */}
                  <p className="text-center text-muted-foreground">
                    السلة فارغة حالياً
                  </p>

                  {/* يمكنك إضافة عناصر السلة هنا */}
                  {/* 
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))} 
            */}

                  {/* زر المتابعة للدفع */}
                  <Button className="w-full mt-6" size="lg">
                    المتابعة للدفع
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* <div className="text-background flex items-center gap-6">
            <Layers  />
            <Star  />
            <ShoppingBag  />
          </div> */}
        </div>
      </nav>

      <hr className="border-[#1c394a]" />
      <nav className="container text-white h-14 flex items-center justify-between">
        <SubNavbar />

        <div className="block md:hidden">
          <InputNavbar />
        </div>

        <div className="hidden md:block">
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  );
}
