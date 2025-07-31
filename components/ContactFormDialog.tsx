"use client";

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useState} from "react";
import {useToast} from "@/hooks/use-toast"; // Corrected import path

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(2, {message: "Name must be at least 2 characters long"}),
  email: z.string().email({message: "Please enter a valid email address"}),
  phone: z
    .string()
    .min(10, {message: "Phone number must be at least 10 digits"})
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Please enter a valid phone number",
    }),
  country: z
    .string()
    .min(2, {message: "Country must be at least 2 characters long"}),
  contactMethod: z.string().min(2, {
    message: "Please enter a valid contact method (e.g., WhatsApp ID)",
  }),
  requirement: z
    .string()
    .min(10, {message: "Requirement must be at least 10 characters long"}),
});

// Infer the form data type from the schema
type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  onClose?: () => void;
}

export default function ContactForm({onClose}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const {toast} = useToast(); // Initialize useToast
  // Initialize react-hook-form with Zod validation
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset, // Add reset for clearing form
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      contactMethod: "",
      requirement: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // console.log("Form data:", data); // Debug: Log form data
      // Use the backend URL (local for now)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      toast({
        title: "Success!",
        description: "Your inquiry has been submitted successfully.",
      });
      setSubmitSuccess(true);
      reset(); // Reset form after success
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Failed to submit the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" w-full ">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
        >
          <X className="w-5 h-5 text-black" />
        </button>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-4 items-center"
      >
        <div className="col-span-12 lg:col-span-6 space-y-2">
          <Label htmlFor="name" className="text-gray-600">
            Name
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Enter your name"
            className="border-gray-300 focus:border-gray-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="col-span-12 lg:col-span-6 space-y-2">
          <Label htmlFor="email" className="text-gray-600">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className="border-gray-300 focus:border-gray-500 text-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="col-span-12 lg:col-span-6 space-y-2">
          <Label htmlFor="phone" className="text-gray-600">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="Enter your phone number"
            className="border-gray-300 focus:border-gray-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div className="col-span-12 lg:col-span-6 space-y-2">
          <Label htmlFor="country" className="text-gray-600">
            Country
          </Label>
          <Input
            id="country"
            {...register("country")}
            placeholder="Enter your country"
            className="border-gray-300 focus:border-gray-500"
          />
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}
        </div>
        <div className="col-span-12 lg:col-span-12 space-y-2">
          <Label htmlFor="contactMethod" className="text-gray-600">
            Whatsapp/Telegram/Skype
          </Label>
          <Input
            id="contactMethod"
            {...register("contactMethod")}
            placeholder="Enter your preferred contact method"
            className="border-gray-300 focus:border-gray-500"
          />
          {errors.contactMethod && (
            <p className="text-red-500 text-sm">
              {errors.contactMethod.message}
            </p>
          )}
        </div>
        <div className="col-span-12 lg:col-span-12 space-y-2">
          <Label htmlFor="requirement" className="text-gray-600">
            Requirement
          </Label>
          <Textarea
            id="requirement"
            {...register("requirement")}
            placeholder="Describe your project requirements"
            className="border-gray-300 focus:border-gray-500 min-h-[100px]"
          />
          {errors.requirement && (
            <p className="text-red-500 text-sm">{errors.requirement.message}</p>
          )}
        </div>
        <div className="col-span-12">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white transition-colors"
          >
            {isSubmitting ? "Submitting..." : "ENQUIRE NOW"}
          </Button>
        </div>
      </form>
    </div>
  );
}
