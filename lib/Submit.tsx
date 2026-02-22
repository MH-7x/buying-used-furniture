"use server";
import ContactFormEmail from "@/components/EmailTemplate";
import { Payload } from "@/components/Form";
import { Resend } from "resend";

export const submitDetails = async (
  data: Payload,
): Promise<{ success: boolean; error?: string }> => {
  if (Object.values(data).some((value) => !value)) {
    return {
      success: false,
      error: "Please fill in all the required fields.",
    };
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Resend API is not Configure!!");
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "New Contact From Web <onboarding@resend.dev>",
      to: "buying.used.furniture.uae@gmail.com",
      subject: "New Customer Inquiry",
      react: <ContactFormEmail payload={data} />,
    });
    if (response.error) {
      console.error("Error sending email:", response.error);
      return { success: false, error: "Failed to send email." };
    }
    console.log("Email sent successfully:", response);
    return { success: true };
  } catch (error) {
    console.error("Error in SendMail:", error);
    return {
      success: false,
      error: "An error occurred while sending the email.",
    };
  }
};
