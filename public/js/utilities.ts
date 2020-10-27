type Todo = {
  title: string;
  description: string;
  done: boolean;
};

const todo: Readonly<Todo> = {
  description: "Andar 500 milhas",
  title: "Andar",
  done: false,
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

console.log(todo);

const todo2 = updateTodo(todo, { done: true });

console.log(todo2);

type TodoPreview = Pick<Todo, "title" | "done">;

const todo3: TodoPreview = {
  title: "Helo",
  done: false,
};

type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview2 = {
  done: false,
  title: "Hello",
};
