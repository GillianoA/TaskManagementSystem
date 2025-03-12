public class CreateTaskDTO{
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime? DueDate { get; set; }
    public string Status { get; set; } = "Pending";
    public int Priority { get; set; }
    public int UserId { get; set; }
    public int? CategoryId { get; set; }
}