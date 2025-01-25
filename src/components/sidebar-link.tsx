import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SidebarLink({
  className,
  label,
  icon,
  href,
  onItemClick,
}: {
  className?: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  onItemClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      prefetch={false}
      className={cn(
        "flex items-center gap-2 rounded-md p-2 text-primary/80 px-4 hover:bg-accent hover:text-accent-foreground",
        pathname.replace(/\//, "") === (href.replace(/\//, "") || "") &&
          "bg-accent text-accent-foreground",
        className
      )}
      onClick={onItemClick}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
