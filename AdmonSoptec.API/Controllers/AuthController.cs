using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AdmonSoptec.API.Data;
using AdmonSoptec.API.Dtos;
using AdmonSoptec.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace AdmonSoptec.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        public AuthController(IAuthRepository repo, IConfiguration config)
        {
           _repo = repo;
           _config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegusterDto)
         {
           //Validar solicitud
          userForRegusterDto.Email = userForRegusterDto.Email.ToLower();
           if (await _repo.UserExists(userForRegusterDto.Email))
           return BadRequest("Usuario ya esta ocupado");

           var userToCreate = new User
           {
           Email = userForRegusterDto.Email
           };
           var createdUser = await _repo.Register(userToCreate, userForRegusterDto.Password, userForRegusterDto.Username);
           return StatusCode(201);
        }

           [HttpPost("login")]
           public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
           {
            var userFromRepo = await _repo.Login(userForLoginDto.Email, userForLoginDto.Password);

            if (userFromRepo == null)
            return Unauthorized();

            var claims = new[]
             {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Email)
           };
         
           var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
           var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
           var tokenDescriptor = new SecurityTokenDescriptor
            {
               Subject = new ClaimsIdentity(claims),
               Expires = DateTime.Now.AddDays(1),
               SigningCredentials = creds
           };

           var tokenHandler = new JwtSecurityTokenHandler();
           var token = tokenHandler.CreateToken(tokenDescriptor);

           return Ok(new {token = tokenHandler.WriteToken(token)});
           }
    }
}