public class Category {
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Description { get; set; }
    public List<TaskItem> TaskItems { get; set; } = new List<TaskItem>();
}