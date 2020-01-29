using AdmonSoptec.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AdmonSoptec.API.Data
{
    public class DataContext : DbContext
    {
        
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
       
       public DbSet<Value> Values { get; set; }
    }
}