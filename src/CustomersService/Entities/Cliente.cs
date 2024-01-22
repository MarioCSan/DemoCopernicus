using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CustomersService.Entities;

public class Cliente
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)] 
    public int Id { get; set; }
    public String Email { get; set; }
    public String First { get; set; }
    public String Last { get; set; }
    public String Company { get; set; }
    public DateTimeOffset? CreatedAt { get; set; }
    public String Country { get; set; }


}