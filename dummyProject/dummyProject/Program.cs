using dummyProject.Data;
using dummyProject.graphQl;
using dummyProject.Repositery;
using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

var builder = WebApplication.CreateBuilder(args);

// add connection string
string ConnectionString = builder.Configuration.GetConnectionString("Development");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
  options.UseSqlServer(ConnectionString));
// repositety add 
builder.Services.AddScoped<IStudentRepositery, studentRepositery>();
// graphql ad
builder.Services.AddGraphQLServer().AddQueryType<query>().AddMutationType<mutation>();// graphql system 

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//enable cors
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors("corsapp");
app.MapControllers();
app.MapGraphQL();
app.Run();
