using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace AdmonSoptec.API.Models
{
    public class User: IdentityUser<int>
    {  
      public string  Direccion { get; set; }
      public string  Puesto { get; set; }
      public int TipoUsuario { get; set; }
      public int Estado { get; set; }
      public virtual ICollection<UserRole> UserRoles { get; set; }
    }

}