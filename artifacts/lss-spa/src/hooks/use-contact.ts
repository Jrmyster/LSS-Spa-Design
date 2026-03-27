import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

// Simulated mutation hook since this is a static marketing site without a real backend
export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // We could throw an error here to test error states
      // if (data.email === "error@test.com") throw new Error("Simulated network error");

      return { success: true, message: "Thank you for reaching out!" };
    },
  });
}
