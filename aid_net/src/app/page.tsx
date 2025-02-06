"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-2 ">
        <Navbar />
        <Header />

        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Example App",
              url: "https://example.com",
            }}
          />
        </div>

        <ThirdwebResources />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={thirdwebIcon}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-green-500 ">
        Aid
        <span className="text-zinc-300 inline-block mx-1"> </span>
        <span className="inline-block -skew-x-6 text-zinc-100"> Net. </span>
      </h1>

      <p className="text-zinc-300 text-base">
        Decentralized Emergency Response Network⚡️
      </p>
    </header>
  );
}



function ThirdwebResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="Multi-chain"
        href="https://portal.thirdweb.com/typescript/v5"
        description="Transfer funds with multi-chain"
      />

      <ArticleCard
        title="Community Deriven Network"
        href="https://portal.thirdweb.com/typescript/v5/react"
        description="Join the community and help build the future with turstable funds."
      />

      <ArticleCard
        title="Transparent and Secure"
        href="https://thirdweb.com/dashboard"
        description="AidNet is a transparent and secure platform."
      />
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href + "?utm_source=next-template"}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
