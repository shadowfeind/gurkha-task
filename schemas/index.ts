import * as z from 'zod'

export const loginSchema = z.object({
    userName: z.string().min(5,{
        message: "must be atleast 5 letters long"
    }),
    password: z.string().min(5,{
        message: "must be atleast 5 letters long"
    })
})