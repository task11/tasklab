"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function WithAuth(Component: React.FC) {
  return function WithAuth(props: any) {
    // const token =
    // typeof window !== "undefined"
    //   ? localStorage.getItem("accessToken")
    //   : null;
    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        redirect("/landing");
      }
    }, []);

    if (typeof window !== "undefined" && !localStorage.getItem("accessToken")) {
      return null;
    }

    return <Component {...props} />;
  };
}
