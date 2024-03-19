"use client";

import { redirect } from "next/navigation";

import { useEffect } from "react";

export default function WithoutAuth(Component: React.FC) {
  return function WithoutAuth(props: any) {
    useEffect(() => {
      if (localStorage.getItem("accessToken")) {
        redirect("/");
      }
    }, []);

    if (typeof window !== "undefined" && localStorage.getItem("accessToken")) {
      return null;
    }

    return <Component {...props} />;
  };
}
