import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: Readonly<React.ReactNode>;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl p-6", className)}>{children}</div>
  );
}
