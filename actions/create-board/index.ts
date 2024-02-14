"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import * as z from 'zod'
import { InputType, ReturnType } from "./type"
import { createSafeAction } from "@/lib/create-safe-action"
import { CreateBoard } from "./schema"

const handler = async (data: InputType) : Promise<ReturnType> => {
    const userId = "anl123"
    if(!userId){
        return {
            error: "UnAuthorized"
        }
    }
    const {title} = data
    let board ;
    try {
        board = await db.board.create({
            data: {
                title
            }
        })
    } catch (error) {
        return {
            error: "Failed to create"
        }
    }
    revalidatePath("/dahboard/boards")
    return { data: board }
}

export const createBoard = createSafeAction(CreateBoard, handler)