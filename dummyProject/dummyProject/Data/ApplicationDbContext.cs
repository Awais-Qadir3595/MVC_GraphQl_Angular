using dummyProject.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace dummyProject.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {

        }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder
            .UseLoggerFactory(LoggerFactory.Create(builder => { builder.AddConsole(); }));

        public DbSet<student> students { get; set; }
    }
}
