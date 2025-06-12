"use client";

import ReloadButton from "@/components/ReloadButton";

export default function ErrorPage(error: Error) {
  
  return <>     <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
     <ReloadButton/>
    </main></>;
}
