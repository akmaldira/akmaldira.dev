"use client";

import { useTheme } from "next-themes";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Moon, Settings, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <Select onValueChange={(e) => setTheme(e)} defaultValue={theme || "system"}>
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">
          <p className="flex items-center gap-2 text-sm">
            <Moon className="h-[1.2rem] w-[1.2rem]" />
            Light Mode
          </p>
        </SelectItem>
        <SelectItem value="dark">
          <p className="flex items-center gap-2 text-sm">
            <Sun className="h-[1.2rem] w-[1.2rem]" />
            Dark Mode
          </p>
        </SelectItem>
        <SelectItem value="system">
          <p className="flex items-center gap-2 text-sm">
            <Settings className="h-[1.2rem] w-[1.2rem]" />
            System Mode
          </p>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
