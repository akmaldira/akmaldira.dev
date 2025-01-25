import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import React from "react";
import { X } from "lucide-react";

function NavbarContent() {
  const [sheetOpen, setSheetOpen] = React.useState(false);
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" hideCloseButton>
        <SheetHeader>
          <SheetTitle className="hidden"></SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
        </SheetHeader>
        <div className="flex justify-end">
          <Button size="icon" className="" onClick={() => setSheetOpen(false)}>
            <X />
          </Button>
        </div>
        <Sidebar
          className="w-full max-w-full h-screen"
          onItemClick={() => setSheetOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
}

export default function Navbar() {
  return (
    <div className="fixed z-30 top-0 left-0 right-0 flex items-center justify-between py-4 px-6 bg-background border-b border-secondary shadow-sm">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className={cn("text-xl font-bold")}>Akmal Dira</h1>
      </div>
      <NavbarContent />
    </div>
  );
}
