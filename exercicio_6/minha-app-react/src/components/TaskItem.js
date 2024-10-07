import React from 'react';

function TaskItem({ task, onDelete, onStatusChange }) {
  return (
    <tr>
      <td>{task.description}</td>
      <td>
        <span className={`badge ${task.status === "Concluída" ? "badge-success" : "badge-warning"}`}>
          {task.status}
        </span>
      </td>
      <td>
        <button className="btn btn-success btn-sm mr-2" onClick={onStatusChange}>
          <i className="fas fa-check"></i>
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
