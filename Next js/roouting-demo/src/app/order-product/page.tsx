"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("placing order");
    router.replace("/");
  };
  return (
    <>
      <h1>Order products</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
