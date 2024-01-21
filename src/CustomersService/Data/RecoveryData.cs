using System.ComponentModel;
using CustomersServise.Entities;
using Newtonsoft.Json;

namespace CustomersServise.Data;

public class RecoveryData
{
    public static async Task<List<Cliente>> RecoveryDataGithub()
    {
        string url = "https://raw.githubusercontent.com/robconery/json-sales-data/master/data/customers.json";

        // Crear una instancia de HttpClient
        using (HttpClient httpClient = new HttpClient())
        {
            try
            {
                // Realizar la solicitud HTTP GET y obtener la respuesta
                HttpResponseMessage response = await httpClient.GetAsync(url);

                // Verificar si la solicitud fue exitosa (código 200)
                if (response.IsSuccessStatusCode)
                {
                    // Leer el contenido como una cadena JSON
                    string jsonString = await response.Content.ReadAsStringAsync();

                    // Deserializar la cadena JSON a una lista de objetos Customer
                    var clientes = JsonConvert.DeserializeObject<List<Cliente>>(jsonString);
                    return clientes;

                }
                else
                {
                    Console.WriteLine($"Error: {response.StatusCode}");
                    return null;
                }
            }
            catch (HttpRequestException ex)
            {
                // Loguea la excepción o lanza una excepción personalizada
                Console.WriteLine($"Error en la solicitud HTTP: {ex.Message}");
                return null;
            }
            catch (JsonException ex)
            {
                // Loguea la excepción o lanza una excepción personalizada
                Console.WriteLine($"Error al deserializar JSON: {ex.Message}");
                return null;
            }
        }
    }
}