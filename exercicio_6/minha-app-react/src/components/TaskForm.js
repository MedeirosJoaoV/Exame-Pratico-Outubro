// src/components/TaskForm.js
import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = () => {
        if (newTask.trim()) {
            onAddTask({ description: newTask, status: 'Pendente' });
            setNewTask(''); // Limpa o campo após adicionar
        }
    };

    return (
        <div className="input-group mt-3">
            <input
                type="text"
                className="form-control"
                placeholder="Nova tarefa"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <div className="input-group-append">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Adicionar
                </button>
            </div>
        </div>
    );
}


export default TaskForm;
