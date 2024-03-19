"use client";

import Template from "@/components/templates";
import WithoutAuth from "@/utils/auth/WithoutAuth";

function page() {
  return <Template.Landing />;
}

export default WithoutAuth(page);
