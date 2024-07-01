import React from "react";

export default function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for the feature {slug[0]} and concepts {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
}
