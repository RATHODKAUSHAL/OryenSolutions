import { writeFile } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

import { appendCsvRow, ensureUploadDir } from "@/lib/submissions";

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const fullName = String(form.get("fullName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const resume = form.get("resume");

    if (!fullName || !email || !(resume instanceof File) || resume.size === 0) {
      return NextResponse.json({ error: "Name, email, and resume file are required." }, { status: 400 });
    }

    const uploadDir = await ensureUploadDir("resumes");
    const safeName = resume.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const finalName = `${Date.now()}_${safeName}`;
    const fullPath = path.join(uploadDir, finalName);
    const arrayBuffer = await resume.arrayBuffer();
    await writeFile(fullPath, Buffer.from(arrayBuffer));

    const headers = ["submitted_at", "fullName", "email", "phone", "message", "resume_file"];
    await appendCsvRow("resume_submissions.csv", headers, {
      submitted_at: new Date().toISOString(),
      fullName,
      email,
      phone,
      message,
      resume_file: fullPath,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit resume." }, { status: 500 });
  }
}
