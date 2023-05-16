"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="bg-black">
      <h2 className="text-red-700">
        Something went wrong at About! {`${error}`}
      </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
