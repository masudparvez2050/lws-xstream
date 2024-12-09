import NotFound from "@/components/NotFound404";
import React from "react";

export default function page({ params }) {
  return <NotFound id={params?.id || "unknown"} />;
}
