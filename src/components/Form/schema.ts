import * as z from "zod"

export const schema = z.object({
  frequency: z.union([z.literal("yearly"), z.literal("monthly")]),
  "1": z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email(),
    phone: z
      .string()
      .regex(
        /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        "Must be a valid phone number",
      ),
  }),
  "2": z.object({ planId: z.string() }),
  "3": z.object({ addonIds: z.array(z.string()) }),
})

export type FormValues = z.infer<typeof schema>
