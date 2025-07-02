"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <>
      <main className="flex h-full flex-col items-center justify-center">
        <h2 className="text-center">Something went wrong! {error.message}</h2>
        {/* <ReloadButton/> */}
        <button
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
          onClick={reload}
        >
          Try again
        </button>
      </main>
    </>
  );
}
