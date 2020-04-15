using AdmonSoptec.API.Dtos;
using AdmonSoptec.API.Models;
using AutoMapper;

namespace AdmonSoptec.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Role, RoleDetailedDto>();
        }
    }
}