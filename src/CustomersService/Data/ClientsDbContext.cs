using CustomersServise.Entities;
using Microsoft.EntityFrameworkCore;

namespace CustomersServise.Data;

public class ClientsDbContext : DbContext
{

    public ClientsDbContext(DbContextOptions options) : base(options) { }

    public DbSet<Cliente> Clients { get; set; }
}