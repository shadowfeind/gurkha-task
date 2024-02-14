"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import * as z from 'zod'

export async function createBoard(formData:FormData) {

    const createSchema = z.object({
        title: z.string()
    })
    const {title} = createSchema.parse({
        title: formData.get("title")
    })

    await db.board.create({
        data: {
            title
        }
    })

    revalidatePath("/dashboard/tasks")
}