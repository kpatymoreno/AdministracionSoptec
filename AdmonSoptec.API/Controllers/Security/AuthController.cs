using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AdmonSoptec.API.Data;
using AdmonSoptec.API.Dtos;
using AdmonSoptec.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
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
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        public AuthController(IAuthRepository repo, IConfiguration config, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            
            _signInManager = signInManager;
            _repo = repo;
            _config = config;

            
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegusterDto)
        {
            //Validar solicitud
            userForRegusterDto.Email = userForRegusterDto.Email.ToLower();
           /*  if (await _repo.UserExists(userForRegusterDto.Email))
                return BadRequest("Usuario ya esta ocupado"); */

            var userToCreate = new User
            {
               // Email = userForRegusterDto.Email,
                UserName = userForRegusterDto.Username
                
            };
            
            var result = await _userManager.CreateAsync(userToCreate, userForRegusterDto.Password);
            
            
                
            if (result.Succeeded)
            {return StatusCode(201);}
            return BadRequest(result.Errors);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {

            var user = await _userManager.FindByEmailAsync(userForLoginDto.Email);
            var result = await _signInManager.CheckPasswordSignInAsync(user, userForLoginDto.Password, false);

            if (result.Succeeded)
            { return Ok(new
            {
                token = GenerateJwtToken(user),
                user
            });}
                return Unauthorized();
         
        }

        private string GenerateJwtToken(User user)
        {
            var claims = new[]
          {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Email)
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

            return tokenHandler.WriteToken(token);

        }
    }
}