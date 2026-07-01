import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendWaitlistEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, interest, consent } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Consent is required to join the waitlist." },
        { status: 400 }
      );
    }

    // Insert waitlist request into Neon PostgreSQL
    const newEntry = await prisma.waitlistRequest.create({
      data: {
        name,
        email,
        interest: interest || null,
        consent,
      },
    });

    // Send notification and subscriber confirmation emails
    await sendWaitlistEmail({ name, email, interest });

    return NextResponse.json({ success: true, entry: newEntry }, { status: 201 });
  } catch (error) {
    console.error("Waitlist API Error:", error);

    // Handle unique constraint violation (P2002) for email
    if (error && typeof error === "object" && "code" in error && error.code === "P2002") {
      return NextResponse.json(
        { error: "This email address is already on our waitlist." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
