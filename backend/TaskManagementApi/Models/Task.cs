public class Task{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public DateTime? DueDate { get; set; }
    public bool Status { get; set; }
    public int Prioity { get; set; }
    public int UserId { get; set; }
    public required User User { get; set; } 
    public int CategoryId { get; set; }
    public Category Category { get; set; }
}