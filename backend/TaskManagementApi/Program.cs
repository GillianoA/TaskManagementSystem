using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models; 
using Swashbuckle.AspNetCore.SwaggerGen;

var builder = WebApplication.CreateBuilder(args);

//Load secrets in development
if (builder.Environment.IsDevelopment()){
    builder.Configuration.AddUserSecrets<Program>();
}

builder.Services.AddOpenApi();

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

//Configure CORS
builder.Services.AddCors(options => {
    options.AddPolicy("AllowLocalhost3000", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options => {
    options.SwaggerDoc("v1", new OpenApiInfo {
        Title = "Task Management API",
        Version = "v1",
        Description = "API for managing tasks and user authentication"
    });

    // using System.Reflection;
    var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
});

var app = builder.Build();

if (app.Environment.IsDevelopment()){
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI(options => {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "Task Management API v1");
        options.RoutePrefix = "swagger";
    });
}

app.UseRouting();
app.UseAuthorization();
app.MapControllers();
app.UseCors("AllowLocalhost3000"); // Use the CORS policy named "AllowLocalhost3000"

app.Run();
