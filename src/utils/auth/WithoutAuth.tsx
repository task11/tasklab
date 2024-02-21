"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function WithoutAuth(Component: React.FC) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  return function WithoutAuth(props: any) {
    useEffect(() => {
      if (token) {
        redirect("/");
      }
    }, []);

    if (token) {
      return null;
    }

    return <Component {...props} />;
  };
}
