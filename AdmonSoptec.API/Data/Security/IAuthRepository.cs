using System.Threading.Tasks;
using AdmonSoptec.API.Models;

namespace AdmonSoptec.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user,string password, string email);
        Task<User> Login(string email, string password);
        Task<bool> UserExists(string email);
    }
}