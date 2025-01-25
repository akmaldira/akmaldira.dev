"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchDialog from "./search-dialog";
import { Separator } from "@/components/ui/separator";
import ModeToggle from "./theme-toggle";
import {
  BookText,
  Coffee,
  Contact,
  Home,
  LayoutDashboard,
  MessageCircleCode,
  User,
} from "lucide-react";
import SidebarLink from "./sidebar-link";
import React from "react";
import { cn } from "@/lib/utils";

const items = [
  {
    label: "Home",
    icon: <Home className="h-[1.2rem] w-[1.2rem]" />,
    href: "/",
  },
  {
    label: "Dashboard",
    icon: <LayoutDashboard className="h-[1.2rem] w-[1.2rem]" />,
    href: "/dashboard",
  },
  {
    label: "Projects",
    icon: <Coffee className="h-[1.2rem] w-[1.2rem]" />,
    href: "/project",
  },
  {
    label: "Blog",
    icon: <BookText className="h-[1.2rem] w-[1.2rem]" />,
    href: "/blog",
  },
  {
    label: "About",
    icon: <User className="h-[1.2rem] w-[1.2rem]" />,
    href: "/about",
  },
  {
    label: "Contact",
    icon: <Contact className="h-[1.2rem] w-[1.2rem]" />,
    href: "/contact",
  },
  {
    label: "Guest Room",
    icon: <MessageCircleCode className="h-[1.2rem] w-[1.2rem]" />,
    href: "/guestroom",
  },
];

export default function Sidebar({
  className,
  onItemClick,
}: {
  className?: string;
  onItemClick?: () => void;
}) {
  const [hideAvatar, setHideAvatar] = React.useState(false);

  const handleScroll = React.useCallback(
    () =>
      setTimeout(() => {
        const { scrollY } = window;

        if (scrollY > 60) return setHideAvatar(true);
        return setHideAvatar(false);
      }, 150),
    []
  );

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <aside
      className={cn(
        "h-[85vh] sticky top-0 flex-col gap-4 w-full max-w-60 pt-4",
        className
      )}
    >
      <div>
        <Avatar
          className={cn(
            "w-20 h-20 transition-all duration-700",
            hideAvatar && "w-0 h-0 mb-6"
          )}
        >
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1
          className={cn(
            "text-xl font-bold mt-4 transition-all duration-700",
            hideAvatar && "mt-0"
          )}
        >
          Akmal Dira
        </h1>
        <p className="text-sm text-muted-foreground">Software Engineer</p>
      </div>
      <SearchDialog className="mt-6" />
      <Separator className="mt-4 mb-6" />
      <h3 className="text-sm font-semibold">Navigation</h3>
      {items.map((item) => (
        <SidebarLink
          key={item.href}
          label={item.label}
          icon={item.icon}
          href={item.href}
          className="my-1"
          onItemClick={onItemClick}
        />
      ))}
      <Separator className="my-6" />
      <h3 className="text-sm font-semibold">Theme</h3>
      <ModeToggle className="my-1" />
    </aside>
  );
}
