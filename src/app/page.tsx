"use client";

import Template from "@/components/templates";

import WithAuth from "@/utils/auth/WithAuth";

function Home() {
  return <Template.Home />;
}

export default WithAuth(Home);
