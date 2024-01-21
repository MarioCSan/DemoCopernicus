using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CustomersServise.Entities;

public class Cliente
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public String Email { get; set; }
    public String First { get; set; }
    public String Last { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
    public String Country { get; set; }


}