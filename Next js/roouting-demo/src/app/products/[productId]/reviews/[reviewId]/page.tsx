"use client";
import { notFound } from "next/navigation";
import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  // const random = getRandomInt(2);

  // console.log(random);

  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </>
  );
}
