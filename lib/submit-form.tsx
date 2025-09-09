"use server";

import { Resend } from "resend";
import { z } from "zod";
import { env } from "@/app/env";

// Form schema for validation on server side
const formSchema = z.object({
  email: z.string().email(),
  message: z.string().max(1500),
});

const resend = new Resend(env.RESEND_API_KEY);

export async function submitForm(email: string, message: string) {
  try {
    // Validate input
    const validatedData = formSchema.parse({ email, message });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Test domain - replace with your verified domain
      to: ["iefeatas@gmail.com"], // Replace with your email
      subject: "New Contact Form Message",
      html: `
        <h2>New message from contact form</h2>
        <p><strong>From:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      // Provide more specific error messages
      if (error.message?.includes("domain is not verified")) {
        throw new Error("Email domain not verified. Please verify your domain in Resend dashboard or use test domain.");
      }

      throw new Error("Failed to send email");
    }

    console.log("Email sent successfully:", data);
    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    throw new Error("Failed to submit form");
  }
}
