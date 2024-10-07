namespace TaskApi.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Status { get; set; } // "Pendente" ou "Concluída"
    }
}
