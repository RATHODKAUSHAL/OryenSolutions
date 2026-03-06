import { NextResponse } from "next/server";

import { appendCsvRow } from "@/lib/submissions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, companyName, email, phone, subject, message } = body as Record<string, string>;

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Full name, email, and message are required." }, { status: 400 });
    }

    const headers = ["submitted_at", "fullName", "companyName", "email", "phone", "subject", "message"];
    await appendCsvRow("contact_submissions.csv", headers, {
      submitted_at: new Date().toISOString(),
      fullName: fullName.trim(),
      companyName: (companyName ?? "").trim(),
      email: email.trim(),
      phone: (phone ?? "").trim(),
      subject: (subject ?? "").trim(),
      message: message.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit contact form." }, { status: 500 });
  }
}
