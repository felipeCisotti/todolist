import { useState } from "react";

export default function CardInicial() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTask = () => {
        if (inputValue.trim() === "") return;

        const newTask = {
            id: Date.now(),
            text: inputValue,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setInputValue("");
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Pega a data atual formatada
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);

    return (
        <div className="card-inicial">
            <div className="card-header">
                <h1>Tasks</h1>
                <p>{today}</p>
            </div>

            <div className="divider"></div>

            <div className="tasks-container">
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleAddTask}>+</button>
            </div>

            <div className="divider"></div>

            {/* Lista de tarefas ou Empty State */}
            {tasks.length === 0 ? (
                <div className="empty-state">
                    <h2>✨</h2>
                    <h3>All caught up!</h3>
                    <p>Enjoy your day or add a new task.</p>
                </div>
            ) : (
                <div className="tasks-list">
                    {tasks.map(task => (
                        <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                            <div className="task-content" onClick={() => toggleTask(task.id)}>
                                <span className="custom-checkbox">
                                    {task.completed ?
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        :
                                        <div className="circle-outline"></div>
                                    }
                                </span>
                                <span className={task.completed ? 'strike' : ''}>{task.text}</span>
                            </div>
                            <button className="delete-btn" onClick={() => removeTask(task.id)}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}