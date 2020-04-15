using System.Collections.Generic;
using System.Threading.Tasks;
using AdmonSoptec.API.Data;
using AdmonSoptec.API.Dtos;
using AdmonSoptec.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AdmonSoptec.API.Controllers.Security
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class MRoleController  : ControllerBase
    {
        private readonly RoleManager<Role> _roleManager;
        private readonly IMapper _mapper;

        public MRoleController(RoleManager<Role> roleManager, IMapper mapper)
        {
            _roleManager = roleManager;
            _mapper = mapper;
        }

        [HttpGet]
	
		public async Task<List<Role>> ConRoles()
		{
            var roles = _roleManager.Roles;
            var response =  new List<Role>(roles);
            return   response;

		}
        [HttpGet("con/{id}")]
	
		public async Task<RoleDetailedDto> ConRol(string id)
		{
             var objRole = await _roleManager.FindByIdAsync(id); 
            var rolToReturn =_mapper.Map<RoleDetailedDto>(objRole);
            return  rolToReturn;

		}

    [HttpPost("new")]
        public async Task<IActionResult> NewRole(RoleforUserDto rolesForUserDto)
        {
          
            var rolToCreate = new Role
            {
                // Email = userForRegusterDto.Email,
                Name = rolesForUserDto.Name

            };

            var result = await _roleManager.CreateAsync(rolToCreate);
            

            if (result.Succeeded)
            { return StatusCode(201); }
    
            return BadRequest(result.Errors);
        }

       
        
        [HttpDelete("del/{role}")]
        public async Task<IActionResult> DeleteRole(string role)
        {

            //var value = await _context.Roles.FirstOrDefaultAsync(x => x.Name == id);
            Role objRole = await _roleManager.FindByNameAsync(role);
          
           if (objRole != null)
            {
                IdentityResult result = await _roleManager.DeleteAsync(objRole);
                 
                if (result.Succeeded)
                    { return StatusCode(201); }
                else
                   return BadRequest(result.Errors);
            }
            return StatusCode(201);
        }
}
}