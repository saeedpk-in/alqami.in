import Spinner from "@/components/intractive/Spinner";
import React from "react";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-full min-h-screen justify-center items-center">
      <Spinner />
    </div>
  );
}
