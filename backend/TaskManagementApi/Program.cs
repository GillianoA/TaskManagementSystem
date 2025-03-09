using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//Load secrets in development
if (builder.Environment.IsDevelopment()){
    builder.Configuration.AddUserSecrets<Program>();
}

//load environment variables from appsettings.json
builder.Configuration.AddEnvironmentVariables();

// Register Database Context
builder.Services.AddDbContext<TaskManagementContext>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"),
        sqlServerOptionsAction: sqlOptions => {
            sqlOptions.EnableRetryOnFailure(
                maxRetryCount: 5,
                maxRetryDelay: TimeSpan.FromSeconds(30),
                errorNumbersToAdd: null);
        }
    );
});

builder.Services.AddScoped<JwtService>();
builder.Services.AddControllers();


var app = builder.Build();

app.UseRouting();
app.MapControllers();

app.Run();