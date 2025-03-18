import { useState } from "react";

type AddTaskFormProps = {
    onAddTask: (description: string) => void;
};

export function AddTaskForm({ onAddTask }: AddTaskFormProps) {
    const [taskDescription, setTaskDescription] = useState("");

    const handleSubmit = () => {
        if (taskDescription.trim() !== "") {
            onAddTask(taskDescription);
            setTaskDescription(""); // Réinit champ texte
        }
    };

    return (
        <div className="flex">
            <label className="input input-bordered flex items-center gap-2 flex-grow">
                <input
                    type="text"
                    className="grow"
                    placeholder="Ajouter une tâche"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit();
                        }
                    }}
                />
            </label>
            <button
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                +
            </button>
        </div>
    );
}