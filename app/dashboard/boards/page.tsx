import { db } from "@/lib/db";
import { DeleteBoardButton } from "./DeleteBoardButton";
import Form from "./Form";

const page = async () => {
  const board = await db.board.findMany();

  return (
    <div className="flex flex-col">
      <Form />
      <div className="py-3">
        <ul>
          {board.map((item) => (
            <DeleteBoardButton key={item.id} title={item.title} id={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
