using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TaskApi.Models;

namespace TaskApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private static List<TaskItem> Tasks = new List<TaskItem>
        {
            new TaskItem
            {
                Id = 1,
                Description = "Exercício de React",
                Status = "Concluída",
            },
            new TaskItem
            {
                Id = 2,
                Description = "Exercício de Node.js",
                Status = "Pendente",
            },
            new TaskItem
            {
                Id = 3,
                Description = "Praticar CSS Grid",
                Status = "Pendente",
            },
        };

        // GET: api/tasks
        [HttpGet]
        public ActionResult<IEnumerable<TaskItem>> GetTasks()
        {
            return Ok(Tasks);
        }

        [HttpGet("{id}")]
        public ActionResult<TaskItem> GetTaskById(int id)
        {
            var task = Tasks.FirstOrDefault(t => t.Id == id);
            if (task == null)
            {
                return NotFound();
            }
            return Ok(task);
        }

        // POST: api/tasks
        [HttpPost]
        public ActionResult<TaskItem> AddTask(TaskItem newTask)
        {
            newTask.Id = Tasks.Max(t => t.Id) + 1;
            Tasks.Add(newTask);
            return CreatedAtAction(nameof(GetTaskById), new { id = newTask.Id }, newTask);
        }

        // PUT: api/tasks/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateTaskStatus(int id, [FromBody] TaskItem updatedTask)
        {
            var task = Tasks.FirstOrDefault(t => t.Id == id);
            if (task == null)
            {
                return NotFound();
            }

            task.Status = updatedTask.Status;
            return NoContent();
        }

        // DELETE: api/tasks/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
            var task = Tasks.FirstOrDefault(t => t.Id == id);
            if (task == null)
            {
                return NotFound();
            }

            Tasks.Remove(task);
            return NoContent();
        }
    }
}
