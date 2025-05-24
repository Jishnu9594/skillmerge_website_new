import { Resend } from "resend";

// Check if the API key is present
if (!process.env.RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY is not defined in environment variables.");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, qualification } = body;

    // Log the request data for debugging
    console.log("📩 Received Inquiry:", { name, email, phone, qualification });

    // Send the email via Resend
    const data = await resend.emails.send({
      from: "marketing@skillmerge.in",
      to: ["skillmergeleads@gmail.com"],
      subject: "New Inquiry from SkillMerge",
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Qualification:</strong> ${qualification}</p>
      `,
    });

    console.log("✅ Resend email response:", data);

    return Response.json({
      success: true,
      message: "Inquiry submitted successfully.",
    });
  } catch (error: any) {
    // More detailed error logging
    console.error("❌ Email send failed:", error.message || error);

    return Response.json({
      success: false,
      error: error?.message || "Unknown error occurred while sending email.",
    });
  }
}
