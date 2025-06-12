"use client";
export default function ReloadButton() {
  return (
    <>
      {" "}
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => window.location.reload()}
      >
        Click to Reload
      </button>
    </>
  );
}
