import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const resume = formData.get("resume") as File | null;

    // Validate form data
    if (!name || !email || !phone || !resume) {
      console.error("❌ Missing Fields:", { name, email, phone, resume });
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Convert file to buffer
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log("✅ Form Data Processed:", { name, email, phone, resume: resume.name });

    // Check environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    
    if (!emailUser || !emailPass) {
      console.error("❌ Missing email credentials in environment variables.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    console.log("📨 Sending email...");

    // Send email with resume attached
    await transporter.sendMail({
      from: emailUser,
      to: "vasumathasoftech456@gmail.com", // Change to recipient email
      subject: "New Career Application",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    });

    console.log("✅ Email sent successfully!");
    return NextResponse.json({ message: "Application submitted successfully!" }, { status: 200 });

  } catch (error) {
    console.error("❌ Error submitting application:", error);

    // Ensure TypeScript recognizes error as an instance of Error
    const errorMessage = error instanceof Error ? error.message : "Error submitting application";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
