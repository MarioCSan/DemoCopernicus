using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CustomersService.Data.Migrations
{
    /// <inheritdoc />
    public partial class CambioColumnasParaDatosFinal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Id",
                table: "Clientes");

            
        }
        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
