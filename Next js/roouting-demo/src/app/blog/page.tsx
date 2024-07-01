import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  // title: "Blog",
  title: {
    absolute: "Blog",
  },
};

export default function Blog() {
  return <div>My Blog</div>;
}
