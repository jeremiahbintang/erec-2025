"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => router.push("/"), [router]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        color: "white"
      }}
    >
      <h1 style={{ fontSize: "2rem", margin: 0 }}>404</h1>
      <p style={{ fontSize: "1rem", margin: 0, marginTop: "1rem" }}>
        Redirecting to home.
      </p>
    </div>
  );
}
