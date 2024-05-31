using Employee_Portal__WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace Employee_Portal__WebApi.Context
{
    public class Employee_portalDbcontext:DbContext
    {
        public Employee_portalDbcontext(DbContextOptions options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
    }
}
