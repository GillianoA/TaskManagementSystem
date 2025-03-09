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
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddScoped<JwtService>();

var app = builder.Build();