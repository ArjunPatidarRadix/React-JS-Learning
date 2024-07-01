import Card from "@/app/components/card";
import Link from "next/link";
import React from "react";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}
