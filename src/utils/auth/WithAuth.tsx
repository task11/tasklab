"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function WithAuth(Component: React.FC) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  return function WithAuth(props: any) {
    useEffect(() => {
      if (!token) {
        redirect("/landing");
      }
    }, []);

    if (!token) {
      return null;
    }

    return <Component {...props} />;
  };
}
