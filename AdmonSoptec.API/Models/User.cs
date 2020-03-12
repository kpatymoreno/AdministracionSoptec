using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace AdmonSoptec.API.Models
{
    public class User: IdentityUser<int>
    {      public string  Telefono { get; set; }
      public string  Puesto { get; set; }
      public virtual ICollection<UserRole> UserRoles { get; set; }
    }

}