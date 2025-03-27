import { prisma } from "@/app/config/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    console.log("Webhook payload:", payload);

    if(payload.type === "user.created") {
        await prisma.user.create({
            data: {
                email: payload.data.email_addresses[0].email_address,
                fullName: payload.data.first_name + " " + payload.data.last_name ? payload.data.last_name : "",
                clerkId: payload.data.id,
                avatar: payload.data.profile_image_url,
            }
        })
    }

    return NextResponse.json({
      message: "User authentication done",
    });
  } catch (error) {
    console.error("Failed to process webhook payload:", error);
    return NextResponse.json(
      { error: "Invalid request or payload" },
      { status: 400 }
    );
  }
}
