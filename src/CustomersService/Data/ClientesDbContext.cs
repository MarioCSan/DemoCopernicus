using CustomersService.Entities;
using Microsoft.EntityFrameworkCore;

namespace CustomersService.Data;

public class ClientesDbContext : DbContext
{

    public ClientesDbContext(DbContextOptions options) : base(options) { }

    public DbSet<Cliente> Clientes { get; set; }

    public int GetLastId()
    {
        var lastCliente = Clientes.OrderByDescending(c => c.Id).FirstOrDefault();
     
        return lastCliente != null ? lastCliente.Id : 0;
    }
}