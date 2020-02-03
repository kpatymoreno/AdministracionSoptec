namespace AdmonSoptec.API.Models
{
    public class User
    {
      public int Id { get; set; }  
      public string  Username { get; set; }
      public byte[] PaswswordHash { get; set; }
     public byte[] PaswswordSalt { get; set; }
    }
}