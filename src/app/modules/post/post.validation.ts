import { z } from "zod";

export const postValidationSchema = z.object({
  content: z.string().min(1, "Content is required"),
  images: z.array(z.string().url("Each image must be a valid URL")),
  categories: z.array(z.string()),
  isPremium: z.boolean().optional(),
});
