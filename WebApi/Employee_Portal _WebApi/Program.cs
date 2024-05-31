using Employee_Portal__WebApi.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(Options =>
{
    Options.SwaggerDoc(name: "v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "Employee_Portal",
        Description = "EmployeeApis ",
    });
});



//configre DB
var connectionstring = builder.Configuration.GetConnectionString(name: "DefaultConnection");
builder.Services.AddDbContext<Employee_portalDbcontext>(Options =>
Options.UseSqlServer(connectionstring));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//app.MapGet(, () =>
//{}).WithName();
app.MapControllers();


app.UseCors(c => c.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());


app.Run();

