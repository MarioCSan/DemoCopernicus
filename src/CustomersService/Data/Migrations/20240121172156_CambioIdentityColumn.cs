using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CustomersService.Data.Migrations
{
    /// <inheritdoc />
    public partial class CambioIdentityColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Id",
                table: "Clientes");

            migrationBuilder.AddColumn<int>(
                name: "IdCliente",
                table: "Clientes",
                nullable: false)
                .Annotation("SqlServer:Identity", "1, 1");
          
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Clientes",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");
        }
    }
}
