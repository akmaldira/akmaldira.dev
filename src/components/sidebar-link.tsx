import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SidebarLink({
  className,
  label,
  icon,
  href,
}: {
  className?: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-md p-2 text-primary/80 px-4 hover:bg-accent hover:text-accent-foreground",
        pathname.replace(/\//, "") === (href.replace(/\//, "") || "") &&
          "bg-accent text-accent-foreground",
        className
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
