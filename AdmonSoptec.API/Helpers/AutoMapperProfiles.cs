using AdmonSoptec.API.Dtos;
using AdmonSoptec.API.Dtos.Mantto;
using AdmonSoptec.API.Models;
using AdmonSoptec.API.Models.Mantto;
using AutoMapper;

namespace AdmonSoptec.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Role, RoleDetailedDto>().ReverseMap();
            CreateMap<CategoriaUpdateDto, Categoria>().ReverseMap();
        }
    }
}