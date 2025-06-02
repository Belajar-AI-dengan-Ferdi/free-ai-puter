'use client'

import Footer from "@/components/footer";
import { AIForm } from "@/components/form";
import Title from "@/components/title";
import Script from "next/script";

export default function Home() {
  return (
    <main className="max-w-screen-lg m-auto p-4 space-y-6 justify-center items-center min-h-screen flex flex-col">
      <Title />
      <AIForm />
      <Footer />
      <Script
        src="https://js.puter.com/v2/"
        onLoad={() => console.log("Puter AI loaded")}
      />
    </main>
  );
}
