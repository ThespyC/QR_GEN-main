using PDF2;
using PDF1;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", builder =>
    {
        
        builder.WithOrigins("http://localhost:3000") // Replace with your React app's domain
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});
// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
} 

app.UseHttpsRedirection();

app.UseCors("AllowReactApp"); // Enable CORS with the policy for your React app


app.MapGet("/generate", () => 
{       // Generate the PDF
    var pdf2 = new Generate65PDF1();
    var pdf1 = new Generate24PDF1();
    var filePath = "24pdf.pdf"; // Path to the generated PDF file
    var filePath2 = "65pdf.pdf"; // Path to the generated PDF file

    // Read the file into a byte array
    byte[] fileBytes = System.IO.File.ReadAllBytes(filePath2);
    byte[] fileBytes1 = System.IO.File.ReadAllBytes(filePath);

    // Return the file as a response with the appropriate content type
    return Results.File(fileBytes, "application/pdf", "65pdf.pdf");
})
.WithName("GetPDF")
.WithOpenApi();




app.Run();
