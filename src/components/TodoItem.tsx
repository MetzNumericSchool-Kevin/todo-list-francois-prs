type TodoItemProps = {
    id: number;
    description: string;
    done: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

export function TodoItem({ id, description, done, onToggle, onDelete }: TodoItemProps) {
    return (
        <div className={`${done ? "bg-indigo-900" : "bg-indigo-700"} w-full m-5 rounded-box p-3 flex`}>
      <span className="pr-8">
        <input
            type="checkbox"
            className="checkbox"
            checked={done}
            onChange={() => onToggle(id)}
        />
      </span>
            <span className={`flex-grow ${done ? "line-through" : ""}`}>
        {description}
      </span>
            <div>
                <button
                    className="btn btn-error btn-outline btn-xs"
                    onClick={() => onDelete(id)}
                >
                    X
                </button>
            </div>
        </div>
    );
}