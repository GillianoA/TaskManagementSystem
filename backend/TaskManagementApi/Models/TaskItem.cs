public class TaskItem{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public DateTime? DueDate { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public string Status { get; set; } = "Pending";
    public int Priority { get; set; }
    public int UserId { get; set; }
    public User User { get; set; } 
    public int? CategoryId { get; set; }
    public Category? Category { get; set; }
}