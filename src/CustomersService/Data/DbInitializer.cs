
using Newtonsoft.Json;
using CustomersServise.Entities;
using Microsoft.EntityFrameworkCore;

namespace CustomersServise.Data;

public class DbInitializer
{
    public static async void InitDb(WebApplication app)
    {
        using var scope = app.Services.CreateScope();

       await RecuperarDatos(scope.ServiceProvider.GetService<ClientesDbContext>());
    }
    private static async Task RecuperarDatos(ClientesDbContext context)
    {

        context.Database.Migrate();

        if (context.Clientes.Any())
        {
            Console.WriteLine("DEBUG: Ya existen datos, no hay necesidad de alimentar la bbdd");
            return;
        }

        List<Cliente> clientesRecuperados = await RecoveryData.RecoveryDataGithub();
              

        context.AddRange(clientesRecuperados);

        await context.SaveChangesAsync();

      }

}