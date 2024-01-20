namespace CustomersServise.DTOs;

public class ClienteDTO
{
    public int Id { get; set; }
    public String Email { get; set; }
    public String First { get; set; }
    public String Last { get; set; }
    public String Company { get; set; }
    public DateTime CreayedAt { get; set; } = DateTime.UtcNow;
    public String Country { get; set; }

}