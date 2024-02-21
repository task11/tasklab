"use client";

import WithAuth from "@/utils/auth/withAuth";

function Home() {
  return (
    <div className=" flex-row justify-center gap-6">
      <span className=" ">메인</span>
      <span>메인2</span>
    </div>
  );
}

export default WithAuth(Home);
