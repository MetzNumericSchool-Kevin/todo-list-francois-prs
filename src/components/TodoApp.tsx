
import { useState } from "react";
import { AddTaskForm } from "./AddTaskForm";
import { TodoItem } from "./TodoItem";


type TodoItemType = {
  id: number,
  description: string
  done: boolean
}

export function TodoApp() {
  const [todos, setTodos] = useState<TodoItemType[]>([
    { id: 1, description: "Acheter des oranges", done: false },
    { id: 2, description: "Courir avec le fraté", done: true },
    { id: 3, description: "Me faire défoncer à LoL", done: true },
  ]);

  // Générer un nouvel ID (simple pour cet exemple)
  const getNextId = () => {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  };

  // Ajouter une nouvelle tâche
  const handleAddTask = (description: string) => {
    setTodos([
      ...todos,
      {
        id: getNextId(),
        description,
        done: false
      }
    ]);
  };

  // Basculer l'état de la tâche (fait/non fait)
  const handleToggle = (id: number) => {
    setTodos(
        todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        )
    );
  };

  // Supprimer une tâche
  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Trier les tâches: d'abord les non complétées, puis les complétées
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.done === b.done) return 0;
    return a.done ? 1 : -1;
  });

  return (
      <>
        <AddTaskForm onAddTask={handleAddTask} />

        <div className="my-5 flex-column gap-5 w-full text-left">
          {sortedTodos.map(todo => (
              <TodoItem
                  key={todo.id}
                  id={todo.id}
                  description={todo.description}
                  done={todo.done}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
              />
          ))}
        </div>
      </>
  );
}