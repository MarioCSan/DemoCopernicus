using System.ComponentModel.DataAnnotations;

namespace CustomersServise.DTOs;

public class CreateCliente
{
    [Required]
    public int Id { get; set; }

    [Required]
    public String Email { get; set; }

    [Required]
    public String First { get; set; }

    [Required]
    public String Last { get; set; }

    [Required]
    public String Company { get; set; }

    [Required]
    public DateTime CreayedAt { get; set; } = DateTime.UtcNow;

    [Required]
    public String Country { get; set; }

}