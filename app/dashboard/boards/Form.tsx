"use client";

import { create } from "@/actions/create-board/test";
import ErrorAlert from "@/components/ErrorAlert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";

const Form = () => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <Input
        type="text"
        name="title"
        placeholder="board name"
        className="mr-3"
      />
      {state?.errors?.title
        ? state.errors.title.map((error: string) => (
            <ErrorAlert type="destructive" title={error} />
          ))
        : null}
      <Button type="submit">Create</Button>
    </form>
  );
};

export default Form;
