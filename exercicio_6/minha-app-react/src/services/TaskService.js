// src/services/TaskService.js
const TaskService = {
    getTasks: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 4, description: "Finalizar projeto de backend", status: "Pendente" },
                    { id: 5, description: "Estudar TypeScript", status: "Concluída" }
                ]);
            }, 1000); // Simula um atraso de 1 segundo
        });
    },

    addTask: (task) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(task);
            }, 500);
        });
    },

    deleteTask: (taskId) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), 500);
        });
    },

    updateTaskStatus: (taskId, newStatus) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), 500);
        });
    }
};

export default TaskService;
