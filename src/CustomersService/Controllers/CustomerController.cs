using AutoMapper;
using CustomersService.Data;
using CustomersService.DTOs;
using CustomersService.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CustomersService.Controllers;

[ApiController]
[Route("api/clientes")]
public class clienteController : ControllerBase
{
    private readonly ClientesDbContext _context;
    private readonly IMapper _mapper;
    public clienteController(ClientesDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<List<ClienteDTO>>> GetAllCustomer()
    {
        var clientes = await _context.Clientes
            .OrderBy(x => x.Id)
            .ToListAsync();

        return _mapper.Map<List<ClienteDTO>>(clientes);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ClienteDTO>> getCustomerById(int id)
    {
        try
        {
            var cliente = await _context.Clientes
                .FirstOrDefaultAsync(x => x.Id == id);

            if (cliente == null) return NotFound();

            return _mapper.Map<ClienteDTO>(cliente);
        }
        catch (Exception ex)
        {

            return StatusCode(500, ex + " Error interno del servidor.");
        }
    }


    [HttpPost]
    public async Task<ActionResult<ClienteDTO>> Createcliente(CreateClienteDTO clienteDTO)
    {
        var cliente = _mapper.Map<Cliente>(clienteDTO);

        cliente.Id = _context.GetLastId() + 1;
        cliente.CreatedAt = clienteDTO.CreatedAt ?? DateTime.UtcNow;

        _context.Clientes.Add(cliente);

        var result = await _context.SaveChangesAsync() >= 0;
        // > 0 OK

        if (!result) return BadRequest("No se pudieron guardar los datos en la BD");

        return CreatedAtAction(nameof(getCustomerById), new { cliente.Id }, _mapper.Map<ClienteDTO>(cliente));
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> Updatecliente(int id, UpdateClienteDTO updateClienteDTO)
    {
        var cliente = await _context.Clientes
            .FirstOrDefaultAsync(x => x.Id == id);

        if (cliente == null) return NotFound();
        var i = id; 
        
        cliente.Email = updateClienteDTO.Email ?? cliente.Email;
        cliente.First = updateClienteDTO.First ?? cliente.First;
        cliente.Last = updateClienteDTO.Last ?? cliente.Last;
        cliente.Company = updateClienteDTO.Company ?? cliente.Company;
        cliente.CreatedAt = updateClienteDTO.CreatedAt ?? cliente.CreatedAt ?? DateTime.UtcNow;
        cliente.Country = updateClienteDTO.Country ?? cliente.Country;

        var result = await _context.SaveChangesAsync() > 0;

        if (result) return Ok();

        return BadRequest("Hubo un problema guardando los cambios");
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteCustomer(int id)
    {
        var cliente = await _context.Clientes.FindAsync(id);

        if (cliente == null) return NotFound();

        _context.Clientes.Remove(cliente);

        var result = await _context.SaveChangesAsync() > 0;

        if (!result) return BadRequest("No se pudo eliminar el cliente");

        return Ok();

    }

}