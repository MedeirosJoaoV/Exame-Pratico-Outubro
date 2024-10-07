import React, { useState, useEffect } from 'react';
import TaskService from './services/TaskService';
import TaskList from './components/ListTask';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([

  ]);

  useEffect(() => {
    TaskService.getTasks().then((initialTasks) => {
      setTasks(initialTasks);
    });
  }, []);


  const addTask = (newTask) => {
    TaskService.addTask(newTask).then((addedTask) => {
      setTasks((prevTasks) => [...prevTasks, { ...addedTask, id: prevTasks.length + 1 }]);
    });
  };

  const deleteTask = (taskId) => {
    TaskService.deleteTask(taskId).then(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    });
  };

  const updateTaskStatus = (taskId, newStatus) => {
    TaskService.updateTaskStatus(taskId, newStatus).then(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
    });
  };

  return (
    <div>
      <header className="text-center my-4">
        <h1>Minhas Tarefas</h1>
      </header>
      <div className="container">
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} onUpdateTaskStatus={updateTaskStatus} />
      </div>
    </div>
  );
}

export default App;
