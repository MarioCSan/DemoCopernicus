using AutoMapper;
using CustomersService.Data;
using CustomersService.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CustomersService.Controllers;

[ApiController]
[Route("api/clientes")]
public class AuctionController : ControllerBase
{
    private readonly ClientesDbContext _context;
    private readonly IMapper _mapper;
    public AuctionController(ClientesDbContext context, IMapper mapper)
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

}