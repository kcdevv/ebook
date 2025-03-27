// pages/api/upload.ts
import { prisma } from "@/app/config/db";
import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
});

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Only POST requests allowed" }, { status: 405 });
  }

  try {
    // Await the JSON parsing as it returns a Promise.
    const body = await req.json();
    const fileStr = body.data; // Base64 file data
    const fileType = body.fileType;
    const author = body.author;
    const clerkId = body.clerkId;

    // Validate allowed MIME types (PDF, DOC, DOCX)
    if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(fileType)) {
      return NextResponse.json({ message: "Only PDF or DOC files are allowed" }, { status: 400 });
    }

    // Upload the file to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      resource_type: "auto",
      folder: "uploads",
    });

    // Find the user by clerkId in the database
    const user = await prisma.user.findUnique({
      where: {
        clerkId: clerkId as string,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Create the Book entry in Prisma
    await prisma.book.create({
      data: {
        title: body.title,
        author: author,
        fileUrl: uploadResponse.secure_url,
        userId: user.id,
      },
    });

    return NextResponse.json({ message: "File uploaded successfully", data: uploadResponse });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ message: "Upload failed", error: error instanceof Error ? error.message : error }, { status: 500 });
  }
}
