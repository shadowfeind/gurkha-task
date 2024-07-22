"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Must contain minimun of 3 letters",
  }),
});

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

export const create = async (prevState: State, formData: FormData) => {
  const validateFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing required fields",
    };
  }

  try {
    const { title } = validateFields.data;

    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "Database error",
    };
  }
  revalidatePath("/dahboard/boards");
  redirect("/dahboard/boards");
};

export const deleteBoard = async (id: string) => {
  await db.board.delete({
    where: {
      id,
    },
  });
  revalidatePath("/dahboard/boards");
};
