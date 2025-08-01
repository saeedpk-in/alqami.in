
import AuthTabs from "@/components/intractive/AuthTabs";
import React, { Suspense } from "react";

function page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-emerald-200/30 via-white to-amber-200/30 p-4">
      <Suspense fallback={"loading"}>
        <AuthTabs />
      </Suspense>
    </div>
  );
}

export default page;
