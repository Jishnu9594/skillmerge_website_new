import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, qualification } = await req.json();

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

    console.log("Resend response:", data);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return Response.json({ success: false, error });
  }
}
