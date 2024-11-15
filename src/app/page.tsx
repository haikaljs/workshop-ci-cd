import { db } from "../../lib/db";

const HomePage = async () => {
  const todos = await db.todo.findMany();

  console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default HomePage;
