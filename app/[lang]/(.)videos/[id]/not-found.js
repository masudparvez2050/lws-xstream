import NotFound from "@/components/NotFoundStatic";
import React from "react";

export default function page({ params }) {
  return <NotFound id={params?.id || "unknown"} />;
}
