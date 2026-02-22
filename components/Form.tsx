"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitDetails } from "@/lib/Submit";
import { Loader } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
export interface Payload {
  firstName: string | FormDataEntryValue | null;
  lastName: string | FormDataEntryValue | null;
  email: string | FormDataEntryValue | null;
  message: string | FormDataEntryValue | null;
}

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData(e.currentTarget);

    const formData: Payload = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      message: data.get("message"),
    };

    const response = await submitDetails(formData);

    if (response.success) {
      toast.success("Your message has been sent successfully!", {
        icon: "✅",
      });

      formRef.current?.reset();
      setIsSubmitting(false);
    } else {
      toast.error(
        response.error || "Failed to send your message. Please try again.",
        {
          icon: "❌",
        },
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg ">
      <Card className="relative shadow-none border-none lg:ms-auto">
        <CardHeader>
          <CardTitle>اتصل بنا</CardTitle>
          <CardDescription>
            نحن نحب أن نسمع منك. يرجى ملء هذا النموذج.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-2">
          <form ref={formRef} onSubmit={onSubmit} dir="ltr">
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
              <div className="col-span-2 sm:col-span-1">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  className="mt-2 h-10 bg-white shadow-none"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="First name"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  className="mt-2 h-10 bg-white shadow-none"
                  id="lastName"
                  required
                  name="lastName"
                  placeholder="Last name"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="mt-2 h-10 bg-white shadow-none"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="mt-2 bg-white shadow-none min-h-20"
                  id="message"
                  name="message"
                  required
                  placeholder="Message"
                />
              </div>
            </div>
            <Button disabled={isSubmitting} className="mt-6 w-full" size="lg">
              Submit{" "}
              {isSubmitting && (
                <Loader className="ms-2 animate-spin" size={16} />
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
