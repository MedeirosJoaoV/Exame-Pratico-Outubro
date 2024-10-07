import React from 'react';
import TaskItem from './TaskItem';

function ListTask({ tasks, onDeleteTask, onUpdateTaskStatus }) {
  return (
    <div className="table-responsive mt-4">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Descrição</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={() => onDeleteTask(task.id)}
              onStatusChange={() => onUpdateTaskStatus(task.id, task.status === "Pendente" ? "Concluída" : "Pendente")}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTask;
