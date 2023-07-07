import NewsletterForm from "@/components/newsletter-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6 pt-6 pb-8 md:pt-10 md:pb-12 lg-py-32">
      <div className="container flex flex-col items-center gap-4 text-center max-w-[64rem]">
        <div className="flex gap-2">
          <Link
            href={"https://twitter.com/devdeck101"}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Twitter
          </Link>
          <Link
            href={"https://www.instagram.com/developerdeck101_"}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            href={"https://www.tiktok.com/@developerdeck101"}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            TikTok
          </Link>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Conteúdo mais atualizado de Tecnologia Web do YT é DeveloperDeck101
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Quer fazer parte desta comunidades e receber as novidades enquanto
          elas são novidades?
        </p>
        <div className="">
          <NewsletterForm />
        </div>
        {/* <div className="space-x-4">
          <Link
            href={"https://youtube.com/@DeveloperDeck101"}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            YouTube
          </Link>
          <Link
            href={"https://youtube.com/@DeveloperDeck101"}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          >
            Masterclass Next js 13.4
          </Link>
        </div> */}
      </div>
    </section>
  );
}
