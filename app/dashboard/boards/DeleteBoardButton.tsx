import { Button } from "@/components/ui/button";
import { deleteBoard } from "@/actions/create-board/test";

interface deleteBoardProps {
  title: string;
  id: string;
}

export const DeleteBoardButton = ({ id, title }: deleteBoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className="flex gap-2 mb-2">
      <p>title: {title} </p>
      <Button type="submit" variant="destructive">
        delete
      </Button>
    </form>
  );
};
