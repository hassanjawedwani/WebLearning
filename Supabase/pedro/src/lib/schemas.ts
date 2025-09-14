import z from "zod";

export const todoSchema = z.object({
  title: z
    .string()
    .min(3, { error: "Title must be at least three characters long" })
    .max(50, { error: "Title must be less than 50 characters" }),
  description: z
    .string()
    .min(5, { error: "Description must be at least 5 characters long" })
    .max(250, { error: "Description must be less than 250 characters" }),
});

export type todoSchemaType = z.infer<typeof todoSchema>;
