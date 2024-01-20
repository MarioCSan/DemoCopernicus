using CustomersServise.Entities;
using Microsoft.EntityFrameworkCore;

namespace CustomersServise.Data;

public class ClientesDbContext : DbContext
{

    public ClientesDbContext(DbContextOptions options) : base(options) { }

    public DbSet<Cliente> Clientes { get; set; }
}