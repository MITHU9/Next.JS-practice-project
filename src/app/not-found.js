import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div>
      <h1>This page is not found</h1>
      <Link href={"/"}>Go to home</Link>
    </div>
  );
}
