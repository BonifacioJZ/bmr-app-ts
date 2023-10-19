import { z } from "zod"

const schemaCategory = z.object({
    id:z.string().uuid(),
    name:z.string().length(150),
    description: z.nullable(z.string().length(500)),
    guard_name:z.string().length(13)
})
export  type Category = z.infer<typeof schemaCategory>

export type NewCategory = Omit<Category, 'id'>