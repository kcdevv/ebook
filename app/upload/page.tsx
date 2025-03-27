"use client";

import FileUploader from "@/components/FileUploader";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

function Upload() {
  const user = useUser();
  if (!user) {
    return redirect("/");
  }
  return <FileUploader />;
}

export default Upload;
