using System.Text;
using AutoMapper;
using Belarus.BusinessLogic.Interfaces;
using Belarus.BusinessLogic.Services;
using Belarus.Mapper;
using Belarus.Model;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

var connection = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connection));

builder.Services.AddControllersWithViews();
builder.Services.AddControllers();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidAudience = builder.Configuration["Jwt:Audience"],
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Jwt:Key"))
    };
});

builder.Services.AddTransient<IHashService, HashService>();
builder.Services.AddTransient<IAuthService, AuthService>();
builder.Services.AddTransient<INewsService, NewsService>();
builder.Services.AddTransient<IGalleryService, GalleryService>();
builder.Services.AddTransient<IPhotoService, PhotoService>();
builder.Services.AddTransient<IEmailService, EmailService>();
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);

var mappingConfig = new MapperConfiguration(mc =>
{
    mc.AddProfile(new MapperProfile());
});

IMapper mapper = mappingConfig.CreateMapper();
builder.Services.AddSingleton(mapper);

builder.Services.Configure<FormOptions>(options =>
{
    options.MemoryBufferThreshold = int.MaxValue;
});

builder.Services.AddCors(options =>
{ 
    options.AddDefaultPolicy(
        opt =>
        {
            opt.WithOrigins("https://localhost:44458")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
        });
});

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");


app.Run();