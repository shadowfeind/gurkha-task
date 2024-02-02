'use server'

import { db } from "@/lib/db"

export async function crate(formData:FormData) {
    const title = formData.get('title') as string

    await db.board.create({
        data: {
            title
        }
    })
}