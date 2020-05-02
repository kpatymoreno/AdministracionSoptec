using AdmonSoptec.API.Data.Generics;

namespace AdmonSoptec.API.Models.Mantto
{
    public class Categoria : IEntity
    {
      public int  Id { get; set; }
      public string  Nombre { get; set; }
      public int TipoCategoria { get; set; }
    }
}