"use client";

import Template from "@/components/templates";
import WithAuth from "@/utils/auth/WithAuth";

function page() {
  return <Template.Routine />;
}

export default WithAuth(page);
