using AutoMapper;
using CustomersService.DTOs;
using CustomersService.Entities;

namespace CustomersService.RequestHelpers;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
           CreateMap<Cliente, ClienteDTO>();
        CreateMap<CreateClienteDTO, Cliente>();

    }
}