using Microsoft.EntityFrameworkCore;

public class TaskManagementContext : DbContext{
    public TaskManagementContext(DbContextOptions<TaskManagementContext> options)
        : base(options){
    }

    public DbSet<TaskItem> TaskItems { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Category> Categories { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder){
        base.OnModelCreating(modelBuilder);
        //Configure User entity
        modelBuilder.Entity<User>(entity => {
            entity.HasKey(u => u.Id);
            entity.Property(u => u.Username).IsRequired().HasMaxLength(50);
            entity.Property(u => u.Email).IsRequired().HasMaxLength(100);

            entity.HasIndex(u => u.Email).IsUnique();

            entity.HasMany(u => u.TaskItems).WithOne(t => t.User).HasForeignKey(t => t.UserId);
        });

        //Configure TaskItem entity
        modelBuilder.Entity<TaskItem>(entity => {
            entity.HasKey(t => t.Id);
            entity.Property(t => t.Title).IsRequired().HasMaxLength(200);
            entity.Property(t => t.Description).IsRequired().HasMaxLength(1000);
            entity.Property(t => t.Status).IsRequired().HasDefaultValue("Pending");
            entity.Property(t => t.Priority).IsRequired();

            entity.ToTable(t => t.HasCheckConstraint("CK_TaskItem_Priority", "Priority >= 1 AND Priority <= 3"));
        });

        //configure Category entity
        modelBuilder.Entity<Category>(entity => {
            entity.HasKey(c => c.Id);
            entity.Property(c => c.Name).IsRequired().HasMaxLength(100);
            entity.Property(c => c.Description).IsRequired().HasMaxLength(500);
            entity.HasIndex(c => c.Name).IsUnique();
        });
    }
}