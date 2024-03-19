"use client";

import Template from "@/components/templates";
import WithoutAuth from "@/utils/auth/WithoutAuth";

function page() {
  return <Template.Login />;
}

export default WithoutAuth(page);
