"use client";

import Skills from "@/components/skills";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-4xl font-bold">
        Hi, I&apos;m Akmal{" "}
        <span className="inline-block animate-shake origin-[75%_75%]">👋</span>
      </h1>
      <ul className="mt-2 text-lg text-muted-foreground list-disc flex gap-8 pl-4">
        <li>Aceh, Indonesia</li>
        <li>Working remotely</li>
      </ul>
      <p className="mt-4">
        Graduate with a Bachelor of Computer Engineering from Syiah Kuala
        University. Experienced Backend Developer with 3 years of experience in
        developing and maintaining server-side applications. Skilled in system
        scalability, automated testing, RDBMS, and more. Able to adapt quickly
        and well-organized. Interested in quickly learning the latest web and
        software technologies.
      </p>
      <Separator className="my-8" />
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">Latest Articles</h2>
        <Link
          href="/blog"
          className={cn(
            buttonVariants({ variant: "link" }),
            "flex items-center gap-2 hover:gap-3 transition-all"
          )}
        >
          View all articles
          <ArrowRight />
        </Link>
      </div>
      <Separator className="my-8" />
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">Latest Projects</h2>
        <Link
          href="/projects"
          className={cn(
            buttonVariants({ variant: "link" }),
            "flex items-center gap-2 hover:gap-3 transition-all"
          )}
        >
          View all projects
          <ArrowRight />
        </Link>
      </div>
      <Separator className="my-8" />
      <h2 className="text-2xl font-bold">Tools Behind My Work</h2>
      <Skills />
      <Separator className="my-8" />
      <h2 className="text-2xl font-bold">What I&apos;ve been working on</h2>
      <p className="mt-2">
        I assist brands, companies, institutions, and startups in creating
        exceptional digital experiences for their businesses through strategic
        development services.
      </p>
      <Card className="mt-4">
        <CardHeader className="text-2xl font-bold flex flex-row items-center gap-2">
          <Rocket />
          Lets work together!
        </CardHeader>
        <CardContent>
          I&apos;m open for freelance projects, feel free to email me to see how
          can we collaborate.
        </CardContent>
        <CardFooter>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "default" }), "text-md")}
          >
            Contact Me
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
