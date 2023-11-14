using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using QuizDatabase.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<QuizDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));


var app = builder.Build();
app.UseCors(options => options.WithOrigins("http://localhost:3000")
.AllowAnyMethod()
.AllowAnyHeader());

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(builder.Environment.ContentRootPath, "images")),
    RequestPath = "/Images"
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Use(async (context, next) =>
{
    var containsIdentifikues = context.Request.Headers.ToList().Any(x => x.Key == "Identifikuesi");
    if(containsIdentifikues == false)
    {
        context.Response.StatusCode = 405;
        await context.Response.WriteAsync("Mungon Headeri");
    }
    else
    {
        await next();
    }
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
