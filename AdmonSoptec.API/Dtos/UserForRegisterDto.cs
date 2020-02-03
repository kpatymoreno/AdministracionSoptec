using System.ComponentModel.DataAnnotations;

namespace AdmonSoptec.API.Dtos
{
    public class UserForRegisterDto
    {

        [Required]        
        public string Username { get; set; }

        [Required]  
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Debe especificar contraseña de 4 a 8 caracteres")]
        public string Password { get; set; }
    }

}